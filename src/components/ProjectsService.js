import axios from 'axios'
const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/app6LeXwbRvapHbBw/Projects"
});

// Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY} // READ-ONLY key
Axios.defaults.headers.common = { 'Authorization': `Bearer ` + 'patXLFpXPqr5KfAR8.340d677f0e5e686ad9be0149a1f1055d00008029beb5f8f45e2962e7a090d8c3' } // Acces Token


export default
  {
    getProjects() {
      return Axios.get()
    },
    getProject(slug) {
      return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
  }