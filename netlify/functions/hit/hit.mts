/**
 * POST /api/hit: cookie-less page-view counter for dizid.com (board task T-0063).
 *
 * The site sends one small beacon per page view (src/services/visits.js).
 * Each valid hit from a real browser becomes one anonymous record in Netlify
 * Blobs (see visit.mts). Nothing identifies a person: no IP, cookie, ID or
 * user agent is stored. Read the counts with `node scripts/visits-report.mjs`.
 */
import type { Config, Context } from '@netlify/functions'
import { getDeployStore, getStore } from '@netlify/blobs'
import { isBot, parseVisit, visitKey, MAX_BODY_BYTES } from './visit.mts'

export default async (req: Request, context: Context) => {
  const userAgent = req.headers.get('user-agent') ?? ''
  // Bots get the same empty answer as browsers, so nothing tells them apart.
  if (isBot(userAgent)) return new Response(null, { status: 204 })

  const body = await req.text()
  if (body.length > MAX_BODY_BYTES) return new Response(null, { status: 413 })
  const visit = parseVisit(body, userAgent)
  if (!visit) return new Response(null, { status: 400 })

  // Real counts only from the live site; deploy previews and branch deploys
  // write to a store tied to that deploy, so checks never mix in.
  const store = context.deploy?.context === 'production' ? getStore('visits') : getDeployStore('visits')
  try {
    await store.setJSON(visitKey(visit.t), visit)
  } catch (err) {
    console.error(`visit not stored: ${(err as Error).message}`)
    return new Response(null, { status: 500 })
  }
  return new Response(null, { status: 204 })
}

export const config: Config = {
  path: '/api/hit',
  method: 'POST',
  // A visitor sends one hit per page; 30 a minute per IP is plenty and caps abuse.
  rateLimit: { windowLimit: 30, windowSize: 60, aggregateBy: ['ip', 'domain'] }
}
