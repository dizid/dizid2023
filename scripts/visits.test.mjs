// Tests for dizid.com visit counting (T-0063). Run: npm test
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  isBot,
  deviceOf,
  cleanPath,
  cleanReferrer,
  cleanSource,
  parseVisit,
  visitKey,
  MAX_BODY_BYTES
} from '../netlify/functions/hit/visit.mts'
import { lastDays, summarize, summaryLine } from './visits-report.mjs'

const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
const DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
const NOW = new Date('2026-11-09T12:00:00Z')

test('isBot: crawlers, previews, scripts, headless browsers and empty agents are bots', () => {
  for (const ua of ['Googlebot/2.1', 'Mozilla/5.0 (compatible; bingbot/2.0)', 'facebookexternalhit/1.1', 'curl/8.5.0', 'python-requests/2.31', 'Mozilla/5.0 HeadlessChrome/130.0', 'Chrome-Lighthouse', '', null]) {
    assert.equal(isBot(ua), true, String(ua))
  }
  assert.equal(isBot(IPHONE), false)
  assert.equal(isBot(DESKTOP), false)
})

test('deviceOf: phone vs desktop', () => {
  assert.equal(deviceOf(IPHONE), 'phone')
  assert.equal(deviceOf('Mozilla/5.0 (Linux; Android 14; Pixel 8) Mobile Safari/537.36'), 'phone')
  assert.equal(deviceOf(DESKTOP), 'desktop')
})

test('cleanPath: keeps plain site paths, drops query, hash and trailing slash, rejects the rest', () => {
  assert.equal(cleanPath('/'), '/')
  assert.equal(cleanPath('/hire/'), '/hire')
  assert.equal(cleanPath('/hire?utm_source=upwork#services'), '/hire')
  assert.equal(cleanPath('/blog/eu-ai-act-article-50-chatbot-check'), '/blog/eu-ai-act-article-50-chatbot-check')
  for (const bad of ['hire', 'https://evil.example/', '/<script>', `/${'a'.repeat(250)}`, 42, null, undefined]) {
    assert.equal(cleanPath(bad), null, String(bad))
  }
})

test('cleanReferrer: site name only, own site and junk count as direct', () => {
  assert.equal(cleanReferrer('www.Upwork.com'), 'upwork.com')
  assert.equal(cleanReferrer('https://www.linkedin.com/in/someone?x=1'), 'linkedin.com')
  assert.equal(cleanReferrer('chatgpt.com'), 'chatgpt.com')
  assert.equal(cleanReferrer(''), 'direct')
  assert.equal(cleanReferrer('dizid.com'), 'direct')
  assert.equal(cleanReferrer('www.dizid.com'), 'direct')
  assert.equal(cleanReferrer('t0063-visits--pensive-franklin-206069.netlify.app'), 'direct')
  assert.equal(cleanReferrer('not a host!'), 'direct')
  assert.equal(cleanReferrer({ host: 'x' }), 'direct')
})

test('cleanSource: lowercase utm_source, junk dropped', () => {
  assert.equal(cleanSource('Upwork'), 'upwork')
  assert.equal(cleanSource('malt_profile'), 'malt_profile')
  assert.equal(cleanSource('<b>x</b>'), '')
  assert.equal(cleanSource(undefined), '')
})

test('parseVisit: a landing keeps referrer and source; an in-site click does not', () => {
  const landing = parseVisit(JSON.stringify({ p: '/hire/', l: true, r: 'www.upwork.com', s: 'Upwork' }), IPHONE, NOW)
  assert.deepEqual(landing, { t: '2026-11-09T12:00:00.000Z', p: '/hire', l: true, r: 'upwork.com', s: 'upwork', d: 'phone' })

  const click = parseVisit(JSON.stringify({ p: '/blog', l: false, r: 'upwork.com', s: 'x' }), DESKTOP, NOW)
  assert.deepEqual(click, { t: '2026-11-09T12:00:00.000Z', p: '/blog', l: false, r: '', s: '', d: 'desktop' })

  const direct = parseVisit(JSON.stringify({ p: '/', l: true, r: '' }), DESKTOP, NOW)
  assert.equal(direct.r, 'direct')
})

test('parseVisit: invalid beacons give null', () => {
  for (const body of ['', 'not json', '[]', 'null', '"x"', JSON.stringify({ l: true }), JSON.stringify({ p: 'https://evil.example/' }), JSON.stringify({ p: `/${'a'.repeat(MAX_BODY_BYTES)}` })]) {
    assert.equal(parseVisit(body, DESKTOP, NOW), null, body.slice(0, 40))
  }
})

test('visitKey: grouped by UTC day, unique per hit', () => {
  assert.equal(visitKey('2026-11-09T12:00:00.000Z', 'abcd1234'), '2026-11-09/1794225600000-abcd1234')
  const a = visitKey('2026-11-09T12:00:00.000Z')
  const b = visitKey('2026-11-09T12:00:00.000Z')
  assert.match(a, /^2026-11-09\/1794225600000-[0-9a-f]{8}$/)
  assert.notEqual(a, b)
})

test('report: last days, totals per day, sources and the one-line summary', () => {
  const days = lastDays(3, NOW)
  assert.deepEqual(days, ['2026-11-07', '2026-11-08', '2026-11-09'])

  const records = [
    { t: '2026-11-08T09:00:00Z', p: '/', l: true, r: 'upwork.com', s: 'upwork', d: 'phone' },
    { t: '2026-11-08T09:01:00Z', p: '/hire', l: false, r: '', s: '', d: 'phone' },
    { t: '2026-11-09T10:00:00Z', p: '/blog', l: true, r: 'direct', s: '', d: 'desktop' },
    { t: '2026-11-09T11:00:00Z', p: '/hire', l: true, r: 'upwork.com', s: '', d: 'phone' },
    { t: '2026-10-01T00:00:00Z', p: '/', l: true, r: 'old.example', s: '', d: 'phone' } // outside the window
  ]
  const summary = summarize(records, days)
  assert.equal(summary.visits, 3)
  assert.equal(summary.views, 4)
  assert.deepEqual(summary.perDay.get('2026-11-07'), { visits: 0, views: 0 })
  assert.deepEqual(summary.perDay.get('2026-11-09'), { visits: 2, views: 2 })
  assert.deepEqual(summary.referrers, [['upwork.com', 2], ['direct', 1]])
  assert.deepEqual(summary.sources, [['upwork', 1]])
  assert.deepEqual(summary.pages[0], ['/hire', 2])
  assert.equal(summaryLine(summary, days), 'dizid.com 2026-11-07..2026-11-09: 3 visits, 4 page views · from: upwork.com 2, direct 1 · 67% phone')
  assert.equal(summaryLine(summarize([], days), days), 'dizid.com 2026-11-07..2026-11-09: 0 visits, 0 page views')
})
