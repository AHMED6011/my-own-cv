<template>
  <div class="projects py-3">
    <div v-motion-enter-right class="content py-5">
      <div class="container-fluid">
        <div class="projects px-md-5 px-0">
          <h1 class="text-light text-center text-sm-start">Projects</h1>
          <div id="rows" class="row justify-content-center">
            <InfoProjects
              v-for="project in projects"
              :key="project.id"
              :img="project.img"
              :title="project.title"
              :prag="project.prag"
              :langMade="project.langMade"
              :githubLink="project.githubLink"
              :siteLink="project.siteLink"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsData from '../assets/json/data.json'
import InfoProjects from '../components/global/JsonData.vue'
export default {
  data() {
    return {
      projects: ProjectsData
    }
  },
  components: {
    InfoProjects
  }
}
</script>
