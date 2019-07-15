<template>
  <div>

    <AppNavBar @open="isSideNavOpen = true" />
    <main @click="isSideNavOpen = false">
      <nuxt class="height-minus-nav" />
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
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,400i,500,600,700&display=swap');

:root {
  --nav-height: 5rem;
}

.height-minus-nav {
  min-height: calc(100vh - var(--nav-height));
}

.height-minus-nav {
  min-height: 100vh;
}

body {
  font-family: 'Barlow Condensed', sans-serif;
}

.my-bg {
  background-image: url('~assets/img/bg-home.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>


