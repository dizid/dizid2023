/**
 * Project list for /projects, served by the Netlify function /api/projects
 * (netlify/functions/projects/projects.mts). The Airtable token stays on the
 * server; it used to be called from here, which put it in the public JavaScript.
 */

/**
 * Fetch all projects (newest first).
 * @returns {Promise<Array|null>} Array of project objects, or null when Airtable
 *   isn't configured (the page then keeps its built-in list)
 */
export async function fetchProjects() {
  const response = await fetch('/api/projects', { headers: { Accept: 'application/json' } })
  if (!response.ok) {
    throw new Error(`Projects request failed (${response.status})`)
  }
  const data = await response.json()
  return Array.isArray(data.projects) ? data.projects : null
}

export default {
  fetchProjects
}
