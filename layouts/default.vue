<template>
  <div>
    <div class="absolute top-0 w-full">
      <AppNavBar />
    </div>
    <main class="min-h-screen pb-20 md:pb-0 bg-secondary">
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

/* nav .router-link-exact-active {
  @apply bg-red-500;
}

@screen lg {
  nav .router-link-exact-active {
    @apply underline;
  }
} */
</style>
