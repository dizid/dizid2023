<script setup> 
import { reactive } from 'vue'
import  ProjectsService  from '@/components/ProjectsService.js' // use getProjects() from ProjectService to get all projects  
// export default { name: "AppsChildView", }
const projects = reactive([])

async function getProjects() {
                try{
                    const response = await ProjectsService.getProjects()
                    console.log("MF (inside function) response: ", response)
                    projects = await response.data.records
                    console.log("MF: (inside function) projects: ", projects)  // WORKS
                }catch(err){
                    console.log(err)
                }
                }
              getProjects() 
              console.log("MF: (outside function) projects: ", projects)
</script>
<template>
    <div class="apps"> 
      <h1>Apps</h1>
      <p>Here are some of my apps:</p>
      <p>TEST: {{ projects }}</p>
      <div class="projects">
        <div v-for="project in projects" :key="project.id">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <p>{{ project.url }}</p>
        </div>
    </div>
    </div>
    </template>
