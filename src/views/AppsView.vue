<script setup> 
import { reactive } from 'vue'
import  ProjectsService  from '@/components/ProjectsService.js' // use getProjects() from ProjectService to get all projects  
let state = reactive( {projects: [],})
async function getProjectsData() {
                try{
                    const response = await ProjectsService.getProjects().then((response) => {
                   state.projects = response.data.records 
                   console.log(state.projects)
                  })
                }catch(err){
                    console.log(err)
                }}
              getProjectsData() 
</script>
<template>
    <div class="apps"> 
      <h1>Apps</h1>
      <p>Some sites, apps and tools i made in the past 10 years:</p>
      <div class="flex">
        <div class="purpleurls" v-for="project in state.projects" :key="project.id">
          <p v-if="project.fields.URL"><a :href="project.fields.URL">{{ project.fields.Title }}</a></p>
          <p v-else>{{ project.fields.Title }}</p>
          <p><img :src="project.fields.Image[0].url" :alt="project.fields.slug" width="250"/></p> 
        </div>
    </div>
    </div>
    </template>
