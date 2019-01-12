<template>
  <!-- TODO: remove div here? -->
  <div class="min-h-screen">
    <div class="container mx-auto">
      <AppNavBar @open="isSideNavOpen = true" />
      <nuxt />
    </div>
    <AppSideNav :open="isSideNavOpen" @close="isSideNavOpen = false" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'

export default {
  data() {
    return {
      isSideNavOpen: false,
    }
  },
  components: {
    AppNavBar: NavBar,
    AppSideNav: SideNav,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700');

:root {
  --nav-height: 15vh;
}

body {
  font-family: 'Raleway', sans-serif;
}
</style>


