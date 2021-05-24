<template>
  <header
    class="items-center justify-between hidden px-2 py-8 md:flex md:16px lg:px-24"
  >
    <nuxt-link to="/" class="no-underline text-pink-darkest ">
      <h1 class="text-5xl font-medium tracking-normal md:text-6xl">
        Soline Wang
      </h1>
    </nuxt-link>

    <nav>
      <a
        href="https://www.instagram.com/solinewangmua/"
        target="_blank"
        rel="noopener"
        class="c-social-share"
        aria-label="Check my Instragram"
      >
        <Instagram class="w-8 fill-current" />
      </a>
    </nav>
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
