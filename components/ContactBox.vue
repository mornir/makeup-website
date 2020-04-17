<template>
  <a :href="link"></a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style></style>
‚
