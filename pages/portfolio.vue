<template>
  <section id="gallery-grid"
           class="bg-pink-200">

    <v-lazy-image :key="photo.public_id"
                  v-for="photo in photos"
                  class="object-cover"
                  :src="urlFor(photo.photo).width(426).height(426).url()"
                  alt="Soline Wang Swiss Makeup Artist" />

  </section>
</template>

<script>
import sanity from '@/sanity/sanityClient'
import urlFor from '@/sanity/imgBuilder'

import { getPhotos } from '@/sanity/queries'

export default {
  name: 'Portfolio',
  data() {
    return {
      photos: [],
    }
  },
  methods: {
    urlFor(src) {
      return urlFor(src)
    },
  },
  async asyncData() {
    try {
      const photos = await sanity.fetch('*[_type == "photo"]')
      return { photos }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style scoped lang="postcss">
#gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>
