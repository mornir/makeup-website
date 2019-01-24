<template>
  <header class="flex justify-between items-center">

    <nuxt-link :to="localePath('index')"
               class="no-underline text-pink-darkest">
      <AppLogo />
    </nuxt-link>

    <nav class="hidden md:block"
         :class="[$route.name.includes('index') ? 'text-pink-alt' : 'text-pink-lightest']">

      <nuxt-link v-for="(link, route) in $i18n.messages.en.links"
                 :key="route"
                 :to="localePath(route)"
                 class="desktop-link mx-2">{{ $t('links.' + route) }}</nuxt-link>

      <span class="pl-2 pb-4 divider border-pink-alt">
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
}
</script>

<style scoped>
header {
  height: var(--nav-height);
}

.divider {
  border-left-width: 1.8px;
  padding-top: 2.6rem;
}
</style>
