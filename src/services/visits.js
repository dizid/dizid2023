/**
 * Cookie-less visit counting for dizid.com (board task T-0063).
 *
 * After each page view the browser sends one small anonymous beacon to
 * /api/hit (netlify/functions/hit): the page path, and on the first page of a
 * visit the referring site and utm_source, so we can see which channel
 * (Upwork, LinkedIn, Malt, Google, ChatGPT...) brings people. No cookie, no
 * ID, no fingerprint. Nothing is stored in the browser except the opt-out flag.
 *
 * Opt out on a device (e.g. Marc's own phone): open any page once with
 * ?nocount=1. ?nocount=0 turns counting back on.
 */
const ENDPOINT = '/api/hit'
const OPT_OUT_KEY = 'dizid:nocount'

/** Reads (and on ?nocount=1/0 sets or clears) this device's opt-out flag. */
function optedOut() {
  try {
    const flag = new URLSearchParams(window.location.search).get('nocount')
    if (flag === '1') window.localStorage.setItem(OPT_OUT_KEY, '1')
    if (flag === '0') window.localStorage.removeItem(OPT_OUT_KEY)
    return window.localStorage.getItem(OPT_OUT_KEY) === '1'
  } catch {
    // Storage blocked (private mode etc.): just count.
    return false
  }
}

/** Host of the page that linked here, or '' for a direct visit or our own site. */
function externalReferrer() {
  try {
    if (!document.referrer) return ''
    const host = new URL(document.referrer).hostname
    return host === window.location.hostname ? '' : host
  } catch {
    return ''
  }
}

/** utm_source, or ?ref= (used by some platforms), on the landing URL. */
function landingSource() {
  const params = new URLSearchParams(window.location.search)
  return (params.get('utm_source') || params.get('ref') || '').slice(0, 40)
}

function send(payload) {
  const body = JSON.stringify(payload)
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, body)) return
  } catch {
    // Fall through to fetch.
  }
  fetch(ENDPOINT, { method: 'POST', body, keepalive: true }).catch(() => {})
}

/**
 * Counts every page view of the router, starting with the landing page.
 * Skips local dev, automated browsers and opted-out devices.
 */
export function trackVisits(router) {
  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1' || navigator.webdriver || optedOut()) return

  let landing = true
  router.afterEach((to, from, failure) => {
    if (failure) return
    // A jump to a section on the same page (/hire#services) is not a new page view.
    if (!landing && to.path === from.path) return
    send(landing ? { p: to.path, l: true, r: externalReferrer(), s: landingSource() } : { p: to.path, l: false })
    landing = false
  })
}
