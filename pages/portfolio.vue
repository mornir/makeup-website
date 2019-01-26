<i18n>
{
  "en": {
    "title": "Coming soon."
  },
  "fr": {
    "title": "En construction."
  }
}
</i18n>

<template>
  <div class="height-minus-nav flex justify-center items-center">
    <h1 class="italic text-pink-lightest">{{ $t('title') }}</h1>
  </div>
</template>

<script>
export default {}
</script>

<style>
.height-minus-nav {
  min-height: calc(100vh - var(--nav-height));
}
</style>
