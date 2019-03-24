<template>
  <div>

    <AppNavBar @open="isSideNavOpen = true" />
    <main @click="isSideNavOpen = false">
      <nuxt />
    </main>

    <AppSideNav :open="isSideNavOpen"
                @close="isSideNavOpen = false"
                @toggle="isSideNavOpen = !isSideNavOpen" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'

export default {
  components: {
    AppNavBar: NavBar,
    AppSideNav: SideNav,
  },
  data() {
    return {
      isSideNavOpen: false,
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,400i,500,600,700');

:root {
  --nav-height: 5rem;
}

body {
  font-family: 'Barlow Condensed', sans-serif;
}
</style>


