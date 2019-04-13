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
  <div class="bg-pink-lightest flex overflow-x-auto scroll-container height-minus-nav"
       ref="container">

    <button class="absolute pin-l p-8 focus:outline-none"
            id="previous"
            @click="scrollLeft">
      <i class="fas fa-arrow-left text-white fa-2x" />
    </button>

    <img src="@/assets/photos/web_Mariage_ jeremie_carron.jpg"
         alt="photo">
    <img src="@/assets/photos/web_Mariage_ jeremie_carron-24.jpg"
         alt="photo">
    <img src="@/assets/photos/impression_Mariage_E&V_ jeremie_carron-158.jpg"
         alt="photo">

    <img src="@/assets/photos/L1180277.jpg"
         alt="photo">

    <img src="@/assets/photos/L1180150.jpg"
         alt="photo">

    <img src="@/assets/photos/L1180240.jpg"
         alt="photo">

    <img src="@/assets/photos/L1070389.jpg"
         alt="photo">

    <button class="absolute pin-r p-8 focus:outline-none"
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
img {
  flex: 0 0 auto;
  scroll-snap-align: center;
  object-fit: contain;
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
