import axios from 'axios'

// Airtable API configuration
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Projects'

const airtableApi = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  }
})

/**
 * Map Airtable record to project object
 */
function mapRecord(record) {
  return {
    id: record.id,
    title: record.fields.Title || record.fields.Name || 'Untitled',
    description: record.fields.Description || '',
    image: record.fields.Image?.[0]?.url || null,
    tech: parseTechnologies(record.fields.Technologies),
    url: record.fields.URL || record.fields.Link || null,
    github: record.fields.GitHub || null,
    featured: record.fields.Featured || false,
    order: record.fields.Order ?? null,
    date: record.fields.Date || null
  }
}

/**
 * Fetch all projects from Airtable
 * @returns {Promise<Array>} Array of project objects
 */
export async function fetchProjects() {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.warn('Airtable credentials not configured. Using fallback projects.')
    return null
  }

  try {
    const response = await airtableApi.get(`/${AIRTABLE_TABLE_NAME}`, {
      params: {
        // Sort by date descending (newest first)
        'sort[0][field]': 'Date',
        'sort[0][direction]': 'desc'
      }
    })

    return response.data.records.map(mapRecord)
  } catch (error) {
    console.error('Error fetching projects from Airtable:', error.message)
    throw error
  }
}

/**
 * Fetch featured projects for homepage (sorted by Order field)
 * @param {number} limit - Maximum number of projects to return
 * @returns {Promise<Array>} Array of project objects
 */
export async function fetchFeaturedProjects(limit = 4) {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.warn('Airtable credentials not configured. Using fallback projects.')
    return null
  }

  try {
    const response = await airtableApi.get(`/${AIRTABLE_TABLE_NAME}`, {
      params: {
        // Only get projects with an Order value set
        filterByFormula: '{Order}',
        // Sort by Order ascending (1, 2, 3...)
        'sort[0][field]': 'Order',
        'sort[0][direction]': 'asc',
        maxRecords: limit
      }
    })

    return response.data.records.map(mapRecord)
  } catch (error) {
    console.error('Error fetching featured projects from Airtable:', error.message)
    throw error
  }
}

/**
 * Parse technologies string into array
 * @param {string|Array} technologies - Technologies field from Airtable
 * @returns {Array<string>} Array of technology names
 */
function parseTechnologies(technologies) {
  if (!technologies) return []
  if (Array.isArray(technologies)) return technologies
  // Handle comma-separated string
  return technologies.split(',').map(tech => tech.trim()).filter(Boolean)
}

export default {
  fetchProjects,
  fetchFeaturedProjects
}
