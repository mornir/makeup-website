<template>
  <header class="flex justify-between items-center">

    <nuxt-link :to="localePath('index')"
               class="no-underline text-pink-darkest self-end">
      <AppLogo />
    </nuxt-link>

    <nav class="hidden md:block"
         :class="[$route.name.includes('index') ? 'text-pink-alt' : 'text-pink-lightest']">

      <nuxt-link v-for="(link, route) in $i18n.messages.en.links"
                 :key="route"
                 :to="localePath(route)"
                 class="desktop-link nav-element mx-2">{{ $t('links.' + route) }}</nuxt-link>

      <span class="pl-2 pb-3 divider border-pink-alt inline-block">
        <!-- https://nuxt-community.github.io/nuxt-i18n/lang-switcher.html -->
        <nuxt-link :to="switchLocalePath('fr')"
                   v-if="$i18n.locale === 'en'"
                   class="nav-element">français</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')"
                   v-else
                   class="nav-element">english</nuxt-link>
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
  padding-top: 3rem;
  width: 4rem;
}

.nav-element {
  text-decoration: none;
  font-weight: 600; /* semibold */
  color: inherit;
  position: relative;
}

.desktop-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -1.5px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.desktop-link:hover::before {
  transform: scaleX(1);
}

.active-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -1.5px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(1);
}
</style>
