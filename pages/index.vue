<template>
  <section class="p-2 md:pt-32">
    <div class="lg:ml-24">
      <h1 class="sr-only">Portfolio</h1>
    </div>
  
    <div class="gallery-grid">
      <!--   <ClientOnly>
        <v-gallery :images="photoUrls" :index="index" @close="index = null" />
      </ClientOnly> -->

      <img
        @click="index = imageIndex"
        v-for="(photo, imageIndex) in photos"
        tabindex="0"
        height="512"
        width="512"
        loading="lazy"
        alt="Soline Wang Swiss Makeup Artist"
        class="object-cover cursor-pointer hover:shadow-md"
        :src="urlFor(photo.asset).size(512, 512)"
        :key="photo.id"
      />
    </div>
  </section>
</template>

<script>
import urlFor from '@/sanity/imgBuilder'

import sanity from '@/sanity/sanityClient'

const query = /* groq */ `
{
  "photos": *[_type == "photo"] {
  "id": _id,
  "asset": photo,
  }
}
`

export default {
  name: 'Portfolio',
  data() {
    return {
      index: null,
      photoUrls: [],
    }
  },
  methods: {
    urlFor(src) {
      return urlFor(src).auto('format')
    },
  },
  asyncData() {
    return sanity.fetch(query)
  },
  mounted() {
    this.photoUrls = this.photos.map(photo => urlFor(photo.asset).url())
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
