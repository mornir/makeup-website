<template>
  <aside class="bg-pink fixed pin-y pin-x"
         :class="{'open': open}">

    <button @click="$emit('close')"
            class="absolute pin-t pin-r mr-4 mt-4 focus:outline-none"><svg class="fill-current text-white h-12 w-12"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24">
        <path fill-rule="evenodd"
              d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z" /></svg></button>

    <nav class="flex flex-col items-end pr-8">
      <nuxt-link :to="localePath('about')"
                 class="text-white no-underline py-3 text-xl font-semibold">about me</nuxt-link>
      <nuxt-link :to="localePath('about')"
                 class="text-white no-underline py-3 text-xl font-semibold">portfolio</nuxt-link>
      <nuxt-link :to="localePath('about')"
                 class="text-white no-underline py-3 text-xl font-semibold">price list</nuxt-link>
      <nuxt-link :to="localePath('about')"
                 class="text-white no-underline py-3 text-xl font-semibold">contact</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')"
                 v-if="$i18n.locale === 'en'"
                 class="text-white no-underline py-3 text-xl font-semibold">français</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')"
                 v-else
                 class="text-white no-underline py-3 text-xl font-semibold">english</nuxt-link>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
}
</script>

<style scoped>
aside {
  -webkit-clip-path: circle(0px at 98% 5px);
  clip-path: circle(0px at 98% 5px);
  transition: clip-path 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  pointer-events: none;
}

aside.open {
  -webkit-clip-path: circle(100vw at 98% 50px);
  clip-path: circle(100vw at 98% 50px);
  transition: clip-path 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  pointer-events: all;
}

nav {
  padding-top: var(--nav-height);
}

nav a {
  opacity: 0;
}

aside.open nav a {
  animation: fadeIn 0.6s ease 0.3s;
  animation-fill-mode: forwards;
}

aside.open nav a:nth-child(2) {
  animation-delay: 0.3s;
}

aside.open nav a:nth-child(3) {
  animation-delay: 0.4s;
}

aside.open nav a:nth-child(4) {
  animation-delay: 0.5s;
}

aside.open nav a:nth-child(5) {
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
