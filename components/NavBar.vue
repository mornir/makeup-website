<template>
  <header class="flex justify-between items-center bg-pink-darker px-8 shadow-md">

    <nuxt-link :to="localePath('index')"
               class="no-underline text-pink-darkest ">
      <h1 class="font-medium tracking-normal text-white">Soline Wang</h1>

    </nuxt-link>

    <nav class="hidden md:block text-pink-lightest">

      <nuxt-link v-for="(link, route) in $i18n.messages.en.links"
                 :key="route"
                 :to="localePath(route)"
                 class="desktop-link nav-element mx-2 uppercase text-xl">{{ $t('links.' + route) }}</nuxt-link>

      <!-- https://nuxt-community.github.io/nuxt-i18n/lang-switcher.html -->
      <nuxt-link :to="switchLocalePath('fr')"
                 v-if="$i18n.locale === 'en'"
                 class="nav-element">FR</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')"
                 v-else
                 class="nav-element">EN</nuxt-link>

    </nav>
  </header>
</template>

<script>
</script>

<style scoped>
header {
  height: var(--nav-height);
}

.my-logo {
  max-height: 4rem;
}

/* .divider {
  border-left-width: 1.8px;
  padding-top: 3rem;
  width: 4rem;
} */

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

.nav-element.active-link::before {
  content: '';
  position: absolute;
  width: 100%;
  bottom: -1.5px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(1);
}
</style>
