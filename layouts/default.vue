<template>
  <div>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
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
