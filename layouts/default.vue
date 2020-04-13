<template>
  <div>
    <div class="fixed top-0 w-full">
      <AppNavBar @open="isSideNavOpen = true" />
    </div>
    <main @click="isSideNavOpen = false">
      <nuxt />
    </main>

    <MobileNav class="md:hidden" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import MobileNav from '../components/MobileNav'

export default {
  components: {
    AppNavBar: NavBar,
    MobileNav,
  },
  data() {
    return {
      isSideNavOpen: false,
    }
  },
}
</script>

<style lang="postcss">
body {
  font-family: 'Raleway', sans-serif;
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.2s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
