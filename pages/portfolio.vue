<template>
  <section class="gallery-grid p-2">

    <gallery :images="photoUrls"
             :index="index"
             @close="index = null" />

    <v-lazy-image v-for="(photo, imageIndex) in photos"
                  :key="photo.id"
                  @click.native="index = imageIndex"
                  :src="urlFor(photo.asset).width(426).height(426).url()"
                  :src-placeholder="photo.lqip"
                  class="w-full object-cover rounded-lg shadow-md horizontal"
                  alt="Soline Wang Swiss Makeup Artist" />
  </section>
</template>

<script>
import sanity from '@/sanity/sanityClient'
import urlFor from '@/sanity/imgBuilder'
const query = `*[_type == "photo"] {
  "id": _id,
  "asset": photo,
  "lqip": photo.asset->metadata.lqip,
  "photoUrls": *[_type == "photo"].photo.asset->url
}
`

export default {
  name: 'Portfolio',
  data() {
    return {
      photos: [],
      // For gallery component
      photoUrls: [],
      index: null,
    }
  },
  methods: {
    urlFor(src) {
      return urlFor(src).auto('format')
    },
  },
  computed: {
    orientation() {
      if (photo.orientation === 'horizontal') {
        return 'horizontal'
      } else {
        return 'vertical'
      }
    },
  },
  async asyncData() {
    try {
      const photos = await sanity.fetch(query)
      return { photos, photoUrls: photos[0].photoUrls }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style scoped lang="postcss">
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.5rem;
}
</style>
