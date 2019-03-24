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
  <div class="w-screen bg-pink-lightest flex overflow-x-auto h-screen scroll-container "
       ref="container">

    <button class="absolute pin-l  p-8"
            id="previous"
            @click="scrollLeft">
      <i class="fas fa-arrow-left text-white fa-2x" />
    </button>

    <img src="@/assets/photos/photo-1.jpg"
         alt="photo">
    <img src="@/assets/photos/photo-2.jpg"
         alt="photo">
    <img src="@/assets/photos/photo-3.jpg"
         alt="photo">

    <button class="absolute pin-r p-8"
            id="next"
            @click="scrollRight">
      <i class="fas fa-arrow-right text-white fa-2x" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollRight() {
      this.$refs.container.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth',
      })
    },
    scrollLeft() {
      this.$refs.container.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.height-minus-nav {
  min-height: calc(100vh - var(--nav-height));
}

img {
  flex: 0 0 auto;
  scroll-snap-align: center;
  object-fit: cover;
  object-position: center center;
}

.scroll-container {
  scroll-snap-type: x mandatory;
}

#next {
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

#previous {
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
</style>
