<template>
  <!-- TODO: remove div here? -->
  <div>
    <AppNavBar @open="isSideNavOpen = true" />
    <main @click="isSideNavOpen = false">
      <nuxt />
    </main>
    <AppSideNav :open="isSideNavOpen"
                @close="isSideNavOpen = false" />
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

.desktop-link {
  text-decoration: none;
  font-weight: 600; /* semibold */
  color: #f9007d; /* pink-alt */
  position: relative;
}

.desktop-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -1.5px;
  left: 0;
  background-color: #f9007d;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.desktop-link:hover::before {
  transform: scaleX(1);
}
</style>


