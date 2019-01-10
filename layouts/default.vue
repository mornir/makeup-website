<template>
<!-- TODO: remove div here? -->
  <div class="min-h-screen">
    <div class="container mx-auto">
      <AppNavBar />
      <nuxt />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700');

body {
  font-family: 'Raleway', sans-serif;
}
</style>

<script>
import NavBar from '../components/NavBar'
export default {
  components: {
    AppNavBar: NavBar,
  },
}
</script>

