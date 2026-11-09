/**
 * Read-only dizid.com visits report (board task T-0063).
 *
 * Reads the anonymous page-view records that /api/hit stores in the live
 * site's "visits" Netlify Blobs store and prints totals for the last N days:
 * visits (landings), page views, per day, top pages, where visits came from
 * (referring site, utm_source) and phone vs desktop. Changes nothing.
 *
 * Run: node scripts/visits-report.mjs [--days=7] [--line]
 *   --line  one summary line (for output/keepbusy-results.md)
 * Auth: NETLIFY_AUTH_TOKEN, else the Netlify CLI login (~/.config/netlify/config.json).
 */
import { readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getStore } from '@netlify/blobs'

// dizid.com's Netlify site (pensive-franklin-206069), see CLAUDE.md "Deployment".
const SITE_ID = process.env.NETLIFY_SITE_ID || '67de6a8a-2b1e-4daa-a744-675b7538ed7d'
const STORE_NAME = 'visits'
const READ_CONCURRENCY = 10
const TOP_N = 10

function netlifyToken() {
  if (process.env.NETLIFY_AUTH_TOKEN) return process.env.NETLIFY_AUTH_TOKEN
  try {
    const config = JSON.parse(readFileSync(join(homedir(), '.config/netlify/config.json'), 'utf8'))
    const token = config.users?.[config.userId]?.auth?.token
    if (token) return token
  } catch {
    // Fall through to the error below.
  }
  throw new Error('No Netlify login: set NETLIFY_AUTH_TOKEN or run `netlify login`.')
}

/** The last `days` UTC dates, oldest first: ["2026-11-03", ..., "2026-11-09"]. */
export function lastDays(days, now = new Date()) {
  const list = []
  for (let i = days - 1; i >= 0; i--) {
    list.push(new Date(now.getTime() - i * 86400000).toISOString().slice(0, 10))
  }
  return list
}

function bump(map, key) {
  map.set(key, (map.get(key) || 0) + 1)
}

function top(map, limit = TOP_N) {
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit)
}

/** Records -> totals. Visits = landings (the first page of each visit). */
export function summarize(records, days) {
  const perDay = new Map(days.map((day) => [day, { visits: 0, views: 0 }]))
  const pages = new Map()
  const referrers = new Map()
  const sources = new Map()
  const devices = new Map()
  let visits = 0
  for (const record of records) {
    const day = perDay.get(String(record.t).slice(0, 10))
    if (!day) continue
    day.views++
    bump(pages, record.p)
    if (record.l) {
      visits++
      day.visits++
      bump(referrers, record.r || 'direct')
      if (record.s) bump(sources, record.s)
      bump(devices, record.d)
    }
  }
  const views = [...perDay.values()].reduce((sum, day) => sum + day.views, 0)
  return { visits, views, perDay, pages: top(pages), referrers: top(referrers), sources: top(sources), devices: top(devices) }
}

export function summaryLine(summary, days) {
  const from = summary.referrers.slice(0, 3).map(([host, count]) => `${host} ${count}`).join(', ')
  const phone = summary.devices.find(([device]) => device === 'phone')?.[1] || 0
  const phoneShare = summary.visits ? Math.round((phone / summary.visits) * 100) : 0
  return `dizid.com ${days[0]}..${days.at(-1)}: ${summary.visits} visits, ${summary.views} page views` +
    (summary.visits ? ` · from: ${from} · ${phoneShare}% phone` : '')
}

function printReport(summary, days) {
  console.log(summaryLine(summary, days))
  console.log('\nPer day (visits / page views):')
  for (const [day, counts] of summary.perDay) console.log(`  ${day}  ${counts.visits} / ${counts.views}`)
  const section = (title, rows) => {
    console.log(`\n${title}:`)
    if (rows.length === 0) console.log('  (none)')
    for (const [key, count] of rows) console.log(`  ${String(count).padStart(5)}  ${key}`)
  }
  section('Top pages (page views)', summary.pages)
  section('Came from (visits)', summary.referrers)
  section('utm_source / ref (visits)', summary.sources)
  section('Device (visits)', summary.devices)
}

async function readRecords(store, days) {
  const keys = []
  for (const day of days) {
    const { blobs } = await store.list({ prefix: `${day}/` })
    keys.push(...blobs.map((blob) => blob.key))
  }
  const records = []
  for (let i = 0; i < keys.length; i += READ_CONCURRENCY) {
    const batch = await Promise.all(keys.slice(i, i + READ_CONCURRENCY).map((key) => store.get(key, { type: 'json' })))
    records.push(...batch.filter(Boolean))
  }
  return records
}

async function main(argv) {
  const daysArg = argv.find((arg) => arg.startsWith('--days='))
  const dayCount = Math.min(Math.max(Number.parseInt(daysArg?.split('=')[1] ?? '7', 10) || 7, 1), 90)
  const days = lastDays(dayCount)
  const store = getStore({ name: STORE_NAME, siteID: SITE_ID, token: netlifyToken() })
  const summary = summarize(await readRecords(store, days), days)
  if (argv.includes('--line')) console.log(summaryLine(summary, days))
  else printReport(summary, days)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((err) => {
    console.error(`visits report failed: ${err.message}`)
    process.exitCode = 1
  })
}
