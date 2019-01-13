<template>
  <nav class="flex justify-between items-center px-8">
    <nuxt-link :to="localePath('index')"
               class="no-underline text-pink-darkest md:self-end">
      <AppLogo />
    </nuxt-link>

    <button @click="toggleSideNav"
            class="focus:outline-none md:hidden"><svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           class="h-8 text-pink fill-current">
        <path fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /></svg></button>

    <div class="hidden md:block">
      <nuxt-link :to="localePath('about')"
                 class="desktop-link mx-2">{{ $t('links.about') }}</nuxt-link>
      <nuxt-link :to="localePath('about')"
                 class="desktop-link mx-2">portfolio</nuxt-link>
      <nuxt-link :to="localePath('about')"
                 class="desktop-link mx-2">price list</nuxt-link>
      <nuxt-link :to="localePath('about')"
                 class="desktop-link mx-2">contact</nuxt-link>

      <span class="pl-2 pb-4 divider">
        <!-- https://nuxt-community.github.io/nuxt-i18n/lang-switcher.html -->
        <nuxt-link :to="switchLocalePath('fr')"
                   v-if="$i18n.locale === 'en'"
                   class="desktop-link">français</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')"
                   v-else
                   class="desktop-link">english</nuxt-link>
      </span>

    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
export default {
  methods: {
    toggleSideNav() {
      this.$emit('open')
    },
  },
  components: {
    AppLogo: Logo,
  },
}
</script>

<style scoped>
nav {
  height: 10vh;
}

.divider {
  border-left: #f9007d 1.8px solid;
  padding-top: 2.6rem;
}
</style>
