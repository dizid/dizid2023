import axios from 'axios'
const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/app6LeXwbRvapHbBw/Projects"
});

// Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY} // READ-ONLY key
Axios.defaults.headers.common = { 'Authorization': `Bearer ` + 'keyXCzlOcNWF6XXB8' } // READ-ONLY key


export default
  {
    getProjects() {
      return Axios.get()
    },
    getProject(slug) {
      return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
  }