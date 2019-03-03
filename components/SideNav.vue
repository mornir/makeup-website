<template>
  <aside class="bg-pink-darker fixed pin-y pin-x flex justify-end md:hidden"
         :class="{'open': open}">

    <button @click="$emit('toggle')"
            class="absolute pin-t pin-r mr-4 mt-4 focus:outline-none pointer-events-auto">

      <svg class="fill-current text-white h-10 w-10"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24">
        <path v-if="open"
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        <path v-else
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
      </svg>
    </button>

    <nav class="flex flex-col items-end mr-8"
         v-if="open"
         @click="$emit('close')">

      <nuxt-link v-for="(link, route) in $i18n.messages.en.links"
                 :key="route"
                 :to="localePath(route)"
                 class="text-white no-underline py-3 text-xl font-semibold">{{ link }}</nuxt-link>

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
  clip-path: circle(4rem at 98% 5px);
  transition: clip-path 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  pointer-events: none;
}

aside.open {
  clip-path: circle(100vw at 98% 50px);
  transition: clip-path 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  pointer-events: all;
}

nav {
  padding-top: var(--nav-height);
}

aside nav a {
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

aside.open nav a:nth-child(6) {
  animation-delay: 0.7s;
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
