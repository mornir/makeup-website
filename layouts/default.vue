<template>
  <div :class="[$route.name.includes('index') ? 'bg-pink-lightest' : 'bg-pink-darker']"
       class="min-h-screen">
    <div class="container mx-auto px-4">
      <AppNavBar @open="isSideNavOpen = true" />
      <main @click="isSideNavOpen = false">
        <nuxt />
      </main>
    </div>
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
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700');

:root {
  --nav-height: 5rem;
}

body {
  font-family: 'Raleway', sans-serif;
}
</style>


