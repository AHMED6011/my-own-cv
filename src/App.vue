<script>
import { RouterView } from 'vue-router'
import SideBar from './components/global/SideBar.vue'
import FooterBar from './components/global/FooterBar.vue'

export default {
  components: {
    RouterView,
    SideBar,
    FooterBar
  }
}
</script>

<template>
  <main class="main-page p-0 container-fluid">
    <SideBar />
    <RouterView />
    <FooterBar />
  </main>
</template>

<style scoped>
.main-page {
  height: 100%;
  background: linear-gradient(to bottom right, #300859, #431080);
}
</style>
