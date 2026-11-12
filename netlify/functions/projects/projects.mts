/**
 * GET /api/projects: the project list for dizid.com/projects, read from Airtable.
 *
 * The Airtable token used to be called from the browser (VITE_AIRTABLE_API_KEY in
 * src/services/airtable.js), which put it in the public JavaScript. Now only this
 * function sees it. The list is the same as before: all records of the Projects table,
 * newest first, mapped to the fields the page shows.
 *
 * Env (Netlify): AIRTABLE_API_KEY / AIRTABLE_BASE_ID / AIRTABLE_TABLE_NAME, falling
 * back to the existing VITE_* names so it works without changing the env vars.
 */
import type { Config } from '@netlify/functions'

interface AirtableRecord {
  id: string
  fields: Record<string, unknown>
}

export interface Project {
  id: string
  title: string
  description: string
  image: string | null
  tech: string[]
  url: string | null
  github: string | null
  featured: boolean
  order: number | null
  date: string | null
}

/** Technologies may be an Airtable multi-select (array) or a comma-separated string. */
export function parseTechnologies(technologies: unknown): string[] {
  if (!technologies) return []
  if (Array.isArray(technologies)) return technologies.map(String)
  return String(technologies)
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean)
}

/** Map one Airtable record to the project shape ProjectsView renders. */
export function mapRecord(record: AirtableRecord): Project {
  const f = record.fields
  const attachments = f.Image as Array<{ url?: string }> | undefined
  return {
    id: record.id,
    title: (f.Title as string) || (f.Name as string) || 'Untitled',
    description: (f.Description as string) || '',
    image: attachments?.[0]?.url || null,
    tech: parseTechnologies(f.Technologies),
    url: (f.URL as string) || (f.Link as string) || null,
    github: (f.GitHub as string) || null,
    featured: Boolean(f.Featured),
    order: (f.Order as number | undefined) ?? null,
    date: (f.Date as string) || null,
  }
}

const json = (body: unknown, status: number, extraHeaders: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...extraHeaders },
  })

export default async () => {
  const token = process.env.AIRTABLE_API_KEY || process.env.VITE_AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID || process.env.VITE_AIRTABLE_BASE_ID
  const table = process.env.AIRTABLE_TABLE_NAME || process.env.VITE_AIRTABLE_TABLE_NAME || 'Projects'
  // Not configured: the page keeps its built-in project list.
  if (!token || !baseId) return json({ projects: null }, 200)

  const url = new URL(`https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(table)}`)
  url.searchParams.set('sort[0][field]', 'Date')
  url.searchParams.set('sort[0][direction]', 'desc')

  try {
    const projects: Project[] = []
    // Airtable pages at 100 records; follow the offset so nothing is cut off.
    let offset: string | undefined
    do {
      if (offset) url.searchParams.set('offset', offset)
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) {
        console.error(`Airtable answered ${res.status}`)
        return json({ error: 'Projects are unavailable right now' }, 502)
      }
      const data = (await res.json()) as { records: AirtableRecord[]; offset?: string }
      projects.push(...data.records.map(mapRecord))
      offset = data.offset
    } while (offset)

    // Airtable's image links are signed and expire a few hours after this fetch
    // (2 h at the earliest), so no cached copy may live that long: the CDN keeps it
    // 30 min plus at most 30 min stale while it refreshes, browsers 5 min. A longer
    // stale window served quiet-hour visitors a list whose images no longer load.
    return json({ projects }, 200, {
      'Cache-Control': 'public, max-age=300',
      'Netlify-CDN-Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=1800',
      // One cache entry whatever the query string (T-0563): by default every ?x=... got its
      // own entry, so each made-up query cost one of Airtable's free monthly API calls.
      // Only the never-used '_v' parameter varies the key.
      'Netlify-Vary': 'query=_v',
    })
  } catch (err) {
    console.error(`Airtable request failed: ${(err as Error).message}`)
    return json({ error: 'Projects are unavailable right now' }, 502)
  }
}

export const config: Config = {
  path: '/api/projects',
  method: 'GET',
}
