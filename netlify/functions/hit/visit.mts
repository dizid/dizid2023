/**
 * dizid.com visit counting (board task T-0063): turns one page-view beacon
 * into one small anonymous record. No IP, no cookie, no ID and no user agent
 * are stored; only the page, where a visit came from and phone vs desktop.
 */

export interface VisitRecord {
  /** Time of the hit, ISO 8601 UTC. */
  t: string
  /** Page path, e.g. "/hire" (no query string, no trailing slash). */
  p: string
  /** Landing: the first page of a visit (a page load), not an in-site click. */
  l: boolean
  /** Referring site of a landing ("upwork.com", "direct"); "" for in-site clicks. */
  r: string
  /** utm_source (or ?ref=) on the landing URL; "" when none or not a landing. */
  s: string
  /** Device class from the user agent. */
  d: 'phone' | 'desktop'
}

/** Largest beacon body accepted (a real one is ~100 bytes). */
export const MAX_BODY_BYTES = 1000

const BOT_PATTERN =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|embedly|curl|wget|python|node-fetch|axios|go-http|java\/|httpclient|scrapy|phantom|selenium|puppeteer|playwright/i
const PATH_PATTERN = /^\/[A-Za-z0-9/_.~%-]{0,199}$/
const HOST_PATTERN = /^[a-z0-9.-]{1,100}$/
const SOURCE_PATTERN = /^[a-z0-9._-]{1,40}$/
// A landing "from" dizid.com itself (reload, new tab) or its Netlify host is a direct visit.
const OWN_HOST_PATTERN = /(^|\.)dizid\.com$|^pensive-franklin-206069\.netlify\.app$|--pensive-franklin-206069\.netlify\.app$/

/** Crawlers, link previews, scripts and headless browsers are not visitors. An empty user agent counts as a bot. */
export function isBot(userAgent: string | null): boolean {
  return !userAgent || BOT_PATTERN.test(userAgent)
}

export function deviceOf(userAgent: string): 'phone' | 'desktop' {
  return /Mobi|Android|iPhone|iPod/i.test(userAgent) ? 'phone' : 'desktop'
}

/** "/hire/" -> "/hire"; anything that isn't a plain site path -> null. */
export function cleanPath(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const path = value.split(/[?#]/)[0]
  const trimmed = path.length > 1 ? path.replace(/\/+$/, '') : path
  return PATH_PATTERN.test(trimmed) ? trimmed : null
}

/** "https://www.Upwork.com/x" or "www.upwork.com" -> "upwork.com"; none, invalid or own site -> "direct". */
export function cleanReferrer(value: unknown): string {
  if (typeof value !== 'string' || value === '') return 'direct'
  let host = value.trim().toLowerCase()
  try {
    if (host.includes('://')) host = new URL(host).hostname
  } catch {
    return 'direct'
  }
  host = host.replace(/^www\./, '')
  if (!HOST_PATTERN.test(host) || OWN_HOST_PATTERN.test(host)) return 'direct'
  return host
}

export function cleanSource(value: unknown): string {
  if (typeof value !== 'string') return ''
  const source = value.trim().toLowerCase()
  return SOURCE_PATTERN.test(source) ? source : ''
}

/**
 * Beacon body (JSON: { p, l, r, s }) -> record, or null when it isn't a valid
 * beacon. Referrer and source are kept for landings only.
 */
export function parseVisit(body: string, userAgent: string, now: Date = new Date()): VisitRecord | null {
  if (body.length > MAX_BODY_BYTES) return null
  let data: unknown
  try {
    data = JSON.parse(body)
  } catch {
    return null
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null
  const input = data as Record<string, unknown>
  const path = cleanPath(input.p)
  if (!path) return null
  const landing = input.l === true
  return {
    t: now.toISOString(),
    p: path,
    l: landing,
    r: landing ? cleanReferrer(input.r) : '',
    s: landing ? cleanSource(input.s) : '',
    d: deviceOf(userAgent)
  }
}

/** One blob per hit, grouped by UTC day: "2026-11-09/1762680000000-1a2b3c4d". No read-modify-write, so no lost counts. */
export function visitKey(isoTime: string, randomPart: string = crypto.randomUUID().slice(0, 8)): string {
  return `${isoTime.slice(0, 10)}/${Date.parse(isoTime)}-${randomPart}`
}
