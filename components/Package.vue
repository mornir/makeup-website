<template>
  <article>
    <header class="bg-pink-lighter text-center px-4 pt-8 pb-6 border-t-8 border-pink-alt rounded-t-lg">
      <h3 class="mb-2 text-2xl">{{ makeup.title }}</h3>
      <p class="italic">{{ makeup.desc }}</p>
    </header>
    <section class="bg-pink-lightest border-b border-dotted border-pink py-8 px-4">
      <ul class="list-reset">
        <li class="features-grid pb-4"
            v-for="feature in makeup.features"
            :key="feature">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               class="h-6 feature-icon">
            <circle cx="12"
                    cy="12"
                    r="10"
                    class="text-pink-alt fill-current" />
            <path class="text-pink-lightest fill-current"
                  d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" /></svg>
          <span class="self-center">{{ feature }}</span></li>
      </ul>
    </section>
    <footer class="bg-pink-lightest text-center py-4 rounded-b-lg">
      <p class="text-3xl mb-6">{{ makeup.price }} <span class="chf text-xs">CHF</span></p>
      <nuxt-link :to="{ path: '/contact', query: { makeup: makeup.slug } }"
                 class="tracking-wide text-lg bg-pink text-pink-lightest px-4 py-2 rounded font-semibold tracking-wide no-underline">select</nuxt-link>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    makeup: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.chf {
  vertical-align: super;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
}

.feature-icon {
  justify-self: end;
}
</style>
