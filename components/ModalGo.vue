<template>
  <div
    class="fixed inset-0 z-10 flex items-end justify-center w-full h-screen sm:items-center bg-semi-75"
    @click.self="close"
  >
    <div
      class="w-full max-w-lg p-8 pb-32 text-center bg-white border-4 border-b-0 border-black shadow-lg sm:pb-8 sm:border-b-4"
    >
      <p class="mb-4 text-lg font-medium text-center" v-if="title">
        {{ title }}
      </p>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalGo',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
