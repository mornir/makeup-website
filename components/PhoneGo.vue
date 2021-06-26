<template>
  <ModalGo :title="PhoneGoNumber" @close="close">
    <p class="mb-2 font-medium">Give me a call</p>
    <div class="flex flex-col items-center gap-y-4">
      <a
        class="contact-button"
        href="https://wa.me/410787498068"
        target="_blank"
      >
        Call with Whatsapp
      </a>
      <a class="contact-button" href="/weixin_qr.jpeg" target="_blank">
        Call with WeChat
      </a>
      <a class="contact-button" :href="phoneNumber">
        Call as default
      </a>
    </div>
  </ModalGo>
</template>

<script>
export default {
  name: 'PhoneGo',
  data() {
    return {
      PhoneGoNumber: '+41 78 749 80 68',
      phoneNumber: 'tel:+41787498068',
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
