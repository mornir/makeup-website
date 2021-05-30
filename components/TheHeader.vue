<template>
  <header class="flex items-center justify-between px-4 pt-8 pb-12">
    <nuxt-link to="/">
      <h1 class="text-5xl font-medium tracking-normal md:text-6xl">
        Soline Wang
      </h1>
    </nuxt-link>

    <div>
      <a
        href="https://www.instagram.com/solinewangmua/"
        target="_blank"
        aria-label="Check my Instragram"
      >
        <Instagram class="w-8 fill-current" />
      </a>
    </div>
  </header>
</template>

<script>
import Instagram from '@/assets/svg/instagram-brands.svg'

export default {
  components: {
    Instagram,
  },
}
</script>
