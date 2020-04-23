<template>
  <n-link
    :to="linkPath"
    class="py-2 text-center"
    active-class="bg-gray-400"
    exact
  >
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="block w-6 h-6 mx-auto "
    >
      <path :d="svgPath"></path>
    </svg>
    <span><slot /></span>
  </n-link>
</template>

<script>
export default {
  props: {
    svgPath: {
      type: String,
      default: '',
      required: true,
    },
    linkPath: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
