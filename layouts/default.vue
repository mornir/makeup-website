<template>
  <div :class="[isHome ? 'bg-pink-lightest' : 'bg-pink-darker']">
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
  computed: {
    isHome() {
      return this.$route.name.includes('index')
    },
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

.desktop-link {
  text-decoration: none;
  font-weight: 600; /* semibold */
  color: inherit;
  position: relative;
}

.desktop-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -1.5px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.desktop-link:hover::before {
  transform: scaleX(1);
}
</style>


