<template>
  <div>
    <client-only>
      <aside
        v-if="$nuxt.isPreview"
        class="sticky top-0 py-2 text-center bg-blue-500 bg-opacity-50"
      >
        <p class="font-semibold">
          Draft Preview.
          <button class="font-semibold underline" @click="$nuxt.refresh()">
            Click here to refresh
          </button>
        </p>
      </aside>
    </client-only>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter class="px-2 pt-12 pb-10" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.solinewang.com' + this.$route.path,
        },
      ],
    }
  },
}
</script>

<style lang="postcss">
body {
  font-family: 'Raleway', sans-serif;
}
</style>
