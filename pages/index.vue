<template>
  <section>
    <h3 class="sr-only">
      Portfolio
    </h3>

    <ClientOnly>
      <Tinybox v-model="index" :images="photos" class="hidden sm:block" />
    </ClientOnly>

    <div class="min-h-screen gallery-grid">
      <picture
        @click="index = imageIndex"
        v-for="(photo, imageIndex) in photos"
        :key="photo._id"
        class="sm:cursor-pointer"
        :class="`sm:col-span-${photo.sizeH} sm:row-span-${photo.sizeV}`"
      >
        <source
          media="(max-width: 640px)"
          :srcset="urlFor(photo.photo).width(800)"
        />
        <img
          loading="lazy"
          alt="Soline Wang Swiss Makeup Artist"
          class="object-cover w-full h-full "
          :src="
            urlFor(photo.photo).size(
              parseInt(photo.sizeH ? photo.sizeH : 1) * 200 * 2,
              parseInt(photo.sizeV ? photo.sizeV : 1) * 200 * 2
            )
          "
        />
      </picture>
    </div>
  </section>
</template>

<script>
import urlFor from '@/sanity/imgBuilder'

import sanity from '@/sanity/sanityClient'

const query = /* groq */ `*[_type == "photo"] | order(order asc) {
    ...,
    "src": photo.asset->url
  }
`

export default {
  name: 'Portfolio',
  data() {
    return {
      index: null,
      photos: [],
    }
  },
  methods: {
    urlFor(src) {
      return urlFor(src).auto('format')
    },
  },
  async mounted() {
    this.photos = await sanity.fetch(query)
  },
}
</script>

<style scoped lang="postcss">
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  row-gap: 1rem;
}

@screen sm {
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    gap: 1.5rem;
  }
}
</style>
