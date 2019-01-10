<template>
  <nav class="flex justify-between items-baseline">
    <nuxt-link to="/" class="no-underline">
      <h1>Soline Wang</h1>
    </nuxt-link>

    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 text-red"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg></button>

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
export default {}
</script>

<style>
</style>
