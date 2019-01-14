<template>
  <div class="photo-bg bg-pink-darker">
    <section class="text-pink-lightest mx-8">
      <h2 class="pb-3">About me</h2>
      <p class="text-lg font-medium about-me leading-tight">Professional makeup artist, working with techniques, creativity, patience and great passion, I've thrown myself into the world of cosmetics for more than ten years, and the belief of beauty makes the change has only been stronger. I studied in Makeup school Studio B in Lausanne and acquired my diploma as a professional makeup artist. Work for all occasions.</p>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.photo-bg {
  background-image: url('~assets/img/about.png');
  background-position: 100% bottom;
  background-repeat: no-repeat;
  background-size: 30vh;
  min-height: calc(100vh - var(--nav-height) + 5vh);
}

@media (max-width: 350px) {
  .about-me {
    font-size: 1rem;
  }
}
</style>
