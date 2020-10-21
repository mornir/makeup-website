<template>
  <section class="p-2 md:pt-32">
    <div class="lg:ml-24">
      <TextHeading>Portfolio</TextHeading>
    </div>
    <div class="gallery-grid">
      <ClientOnly>
        <v-gallery :images="photoUrls" :index="index" @close="index = null" />
      </ClientOnly>

      <img
        @click="index = imageIndex"
        v-for="(photo, imageIndex) in photos"
        tabindex="0"
        height="426"
        width="426"
        loading="lazy"
        alt="Soline Wang Swiss Makeup Artist"
        class="object-cover rounded-lg cursor-pointer hover:shadow-md"
        :src="
          urlFor(photo.asset)
            .width(426)
            .height(426)
            .url()
        "
        :key="photo.id"
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
