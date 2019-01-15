<template>
  <header class="flex justify-between items-center px-8"
          :class="[isHome ? 'bg-pink-lightest' : 'bg-pink-darker']">
    <nuxt-link :to="localePath('index')"
               class="no-underline text-pink-darkest md:self-end">
      <AppLogo :is-home="isHome" />
    </nuxt-link>

    <nav class="hidden md:block">
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

    </nav>
  </header>
</template>

<script>
import Logo from './Logo'
export default {
  components: {
    AppLogo: Logo,
  },
  computed: {
    isHome() {
      return this.$route.name.includes('index')
    },
  },
}
</script>

<style scoped>
header {
  height: 10vh;
}

.divider {
  border-left: #f9007d 1.8px solid;
  padding-top: 2.6rem;
}
</style>
