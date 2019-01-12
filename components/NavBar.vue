<template>
  <nav class="bg-pink-lightest flex justify-between items-center md:items-baseline px-8">
    <nuxt-link to="/" class="no-underline text-pink-darkest">
      <h1>Soline Wang</h1>
    </nuxt-link>

    <button @click="toggleSideNav"
    class="focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 text-pink fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /></svg></button>

    <div class="hidden">
      <nuxt-link to="/about">about me</nuxt-link>
      <nuxt-link to="/about">portfolio</nuxt-link>
      <nuxt-link to="/about">price list</nuxt-link>
      <nuxt-link to="/about">contact</nuxt-link>
      <button>français</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSideNav() {
     this.$emit('open')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Grand+Hotel');

h1 {
  font-family: 'Grand Hotel', cursive;
}

nav {
  height: 10vh;
}
</style>
