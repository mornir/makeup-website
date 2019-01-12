<template>
  <aside class="bg-pink fixed pin-y pin-x"
         :class="{'open': open}">

    <!--     <nuxt-link to="/"
               class="no-underline text-pink-darkest">
      <h1>Soline Wang</h1>
    </nuxt-link> -->

    <button @click="$emit('close')"
            class="absolute pin-t pin-r mr-4 mt-4"><svg class="fill-current text-white h-12 w-12"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24">
        <path fill-rule="evenodd"
              d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z" /></svg></button>

    <nav class="flex flex-col items-end pr-8">
      <nuxt-link to="/about"
                 class="text-white no-underline py-3 text-xl font-semibold">about me</nuxt-link>
      <nuxt-link to="/about"
                 class="text-white no-underline py-3 text-xl font-semibold">portfolio</nuxt-link>
      <nuxt-link to="/about"
                 class="text-white no-underline py-3 text-xl font-semibold">price list</nuxt-link>
      <nuxt-link to="/about"
                 class="text-white no-underline py-3 text-xl font-semibold">contact</nuxt-link>
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
  transition: all 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

aside.open {
  -webkit-clip-path: circle(100vw at 98% 50px);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

nav {
  padding-top: var(--nav-height);
}
</style>
