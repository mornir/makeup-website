<template>
  <section class="p-2 md:pt-32">
    <div class="md:ml-24">
      <TextHeading>Portfolio</TextHeading>
    </div>
    <div class="gallery-grid">
      <ClientOnly>
        <v-gallery :images="photoUrls" :index="index" @close="index = null" />
      </ClientOnly>

      <v-lazy-image
        v-for="(photo, imageIndex) in photos"
        :key="photo.id"
        @click.native="index = imageIndex"
        :src="
          urlFor(photo.asset)
            .width(426)
            .height(426)
            .url()
        "
        :src-placeholder="photo.lqip"
        class="object-cover w-full rounded-lg shadow-md cursor-pointer horizontal"
        alt="Soline Wang Swiss Makeup Artist"
      />
    </div>
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
