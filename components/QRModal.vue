<template>
  <div
    class="fixed inset-0 z-10 flex items-end justify-center w-full h-screen sm:items-center bg-semi-75"
    @click.self="close"
  >
    <div
      class="w-full max-w-lg p-8 text-center bg-white border-4 shadow-lg border-primary"
    >
      <img src="@/assets/img/weixin_qr.jpeg" alt="Weixin QR code" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QRModal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
