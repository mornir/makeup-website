<template>
  <header class="flex items-center justify-between px-2 md:px-24">
    <n-link :to="localePath('index')" class="no-underline text-pink-darkest ">
      <h1 class="text-5xl font-medium tracking-normal md:text-6xl">
        Soline Wang
      </h1>
    </n-link>

    <nav class="hidden md:block">
      <n-link
        v-for="(link, route) in $i18n.messages.en.links"
        :key="route"
        :to="localePath(route)"
        class="mx-4 text-xl font-semibold uppercase desktop-link nav-element"
        >{{ $t('links.' + route) }}</n-link
      >

      <n-link
        class="px-6 py-2 mx-4 text-xl font-semibold text-white uppercase bg-black"
        to="/contact"
        >Contact</n-link
      >

      <!-- https://nuxt-community.github.io/nuxt-i18n/lang-switcher.html -->
      <!--    <nuxt-link :to="switchLocalePath('fr')"
                 v-if="$i18n.locale === 'en'"
                 class="nav-element">FR</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')"
                 v-else
                 class="nav-element">EN</nuxt-link> -->
    </nav>
  </header>
</template>

<style scoped>
/* header {
  height: var(--nav-height);
} */

h1 {
  font-family: 'Grand Hotel', cursive;
}

.my-logo {
  max-height: 4rem;
}

.nav-element {
  text-decoration: none;
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
