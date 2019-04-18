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

    <button v-if="index !== 0"
            class="absolute pin-l p-6 focus:outline-none"
            id="previous"
            @click="scrollLeft">
      <i class="fas fa-arrow-left text-white fa-2x" />
    </button>

    <v-lazy-image :key="photo.public_id"
                  v-for="photo in photos"
                  :src="`https://res.cloudinary.com/infonuagique/image/upload/${photo.public_id}.${photo.format}`"
                  alt="photo" />

    <button v-if="index < photos.length - 1"
            class="absolute pin-r p-6 focus:outline-none"
            id="next"
            @click="scrollRight">
      <i class="fas fa-arrow-right text-white fa-2x" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
      index: 0,
      currentIndex: 0,
    }
  },
  async asyncData({ $axios }) {
    try {
      const photos = await $axios.$get(
        'https://res.cloudinary.com/infonuagique/image/list/soline-portfolio.json'
      )
      return { photos: photos.resources }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    scrollRight() {
      this.$refs.container.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth',
      })
      this.index++
    },
    scrollLeft() {
      this.$refs.container.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth',
      })
      this.index--
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
  right: 1%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

#previous {
  top: 50%;
  left: 1%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
</style>
