<i18n>
{
  "en": {
    "title": "Coming soon."
  },
  "fr": {
    "title": "En construction."
  }
}
</i18n>

<template>
  <div class="w-screen bg-pink-lightest flex overflow-x-auto h-screen scroll-container ">
    <img src="@/assets/photos/photo-1.jpg"
         alt="photo">
    <img src="@/assets/photos/photo-2.jpg"
         alt="photo">
    <img src="@/assets/photos/photo-3.jpg"
         alt="photo">
  </div>
</template>

<script>
export default {}
</script>

<style>
.height-minus-nav {
  min-height: calc(100vh - var(--nav-height));
}

img {
  flex: 0 0 auto;
  scroll-snap-align: center;
}

.scroll-container {
  scroll-snap-type: x mandatory;
}
</style>
