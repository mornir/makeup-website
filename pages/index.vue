<template>
  <section class="md:pt-32">
    <div class="lg:ml-24">
      <h1 class="col-span-3 row-span-3 sr-only">Portfolio</h1>
    </div>

    <ClientOnly>
      <Tinybox v-model="index" :images="photos" />
    </ClientOnly>

    <div class="gallery-grid">
      <img
        @click="index = imageIndex"
        v-for="(photo, imageIndex) in photos"
        loading="lazy"
        alt="Soline Wang Swiss Makeup Artist"
        class="object-cover w-full h-full cursor-pointer hover:shadow-md"
        :class="`col-span-${photo.sizeH} row-span-${photo.sizeV}`"
        :src="
          urlFor(photo.photo).size(
            parseInt(photo.sizeH ? photo.sizeH : 1) * 200,
            parseInt(photo.sizeV ? photo.sizeV : 1) * 200
          )
        "
        :key="photo._id"
      />
    </div>
  </section>
</template>

<script>
import urlFor from '@/sanity/imgBuilder'

import sanity from '@/sanity/sanityClient'

const query = /* groq */ `
{
  "photos": *[_type == "photo"] | order(order asc) {
    ...,
    "src": photo.asset->url
  }
}
`

export default {
  name: 'Portfolio',
  data() {
    return {
      index: null,
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
}
</script>

<style scoped lang="postcss">
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  justify-content: center;
  gap: 1.5rem;
}
</style>
