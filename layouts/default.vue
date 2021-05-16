<template>
  <div>
    <div class="absolute top-0 w-full">
      <AppNavBar />
    </div>
    <main class="min-h-screen pb-20 md:pb-0">
      <nuxt />
    </main>

    <BottomNav class="md:hidden" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import BottomNav from '../components/BottomNav'

export default {
  components: {
    AppNavBar: NavBar,
    BottomNav,
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.solinewang.com' + this.$route.path,
        },
      ],
    }
  },
}
</script>

<style lang="postcss">
body {
  font-family: 'Raleway', sans-serif;
}
</style>
