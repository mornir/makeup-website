<template>
  <header class="items-center justify-between hidden px-2 md:flex md:px-24">
    <n-link to="/" class="no-underline text-pink-darkest ">
      <h1 class="text-5xl font-medium tracking-normal md:text-6xl">
        Soline Wang
      </h1>
    </n-link>

    <nav>
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
    </nav>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(rgba(255, 255, 255, 0.4) 60%, transparent);
}

h1 {
  font-family: 'Grand Hotel', cursive;
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
