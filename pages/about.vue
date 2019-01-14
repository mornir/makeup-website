<template>
  <div class="photo-bg bg-pink-darker ">
    <section class="text-pink-lightest mx-8">
      <img src="@/assets/img/about-mobile.png"
           class="float-right"
           alt="about">
      <div class="pb-5" />
      <h2 class="mb-4 pl-3 border-l-8 border-pink-alt">About me</h2>
      <p class="text-lg font-medium about-me leading-tight">

        Professional makeup artist, working with techniques, creativity, patience and great passion, I've thrown myself into the world of cosmetics for more than ten years, and the belief of beauty makes the change has only been stronger. I studied in Makeup school Studio B in Lausanne and acquired my diploma as a professional makeup artist. Work for all occasions.</p>

      <!-- <h2 class="py-3">Follow me on</h2>
      <p>ion, I've thrown myself into the world of cosmetics for more than ten years, and the belief of beauty makes</p> -->
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.photo-bg {
  /*  background-image: url('~assets/img/about.png');*/
  background-position: 100% bottom;
  background-repeat: no-repeat;
  background-size: 30vh;
  min-height: calc(100vh - var(--nav-height) + 5vh);
}

img[alt='about'] {
  shape-outside: url('~assets/img/about-mobile.png');
  margin-right: -1.5rem;
}
.about-me {
  word-wrap: break-word;
}
/* @media (max-width: 350px) {
  .about-me {
    font-size: 1rem;
  }
} */

#dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 5px;
  background-color: #f9007d;
}
</style>
