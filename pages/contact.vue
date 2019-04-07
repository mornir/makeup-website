<template>
  <div class="text-pink-lightest bg-pink-darkest height-minus-nav">
    <div class="max-w-sm mx-auto">
      <section class="py-8">
        <h2 class="mb-4 pl-3 border-l-8 border-pink-alt">Contact</h2>
        <p class="text-xl">Don’t hesitate to contact me. You can also find my creations on instragam, on my portfolio and on youtube.</p>
      </section>
      <section class="flex justify-around">
        <button @click="show('qr-code')">
          <Weixin class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </button>
        <a href="https://www.instagram.com/solinewang_makeup"
           target="_blank"
           rel="noopener">
          <Instagram class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </a>
        <a href="https://www.youtube.com/channel/UCVeQ_Od2gp9OVRowSFJKPJw"
           target="_blank"
           rel="noopener">
          <YouTube class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </a>

        <button @click="show('email')">
          <EmailIcon class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </button>

      </section>

      <EmailModal />

      <modal name="qr-code"
             adaptive
             height="auto"
             width="350">

        <img src="@/assets/img/weixin_qr_code.jpg"
             alt="Weixin QR Code">
      </modal>

    </div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
import Weixin from '@/assets/svg/weixin-brands.svg'
import Instagram from '@/assets/svg/instagram-brands.svg'
import YouTube from '@/assets/svg/youtube-brands.svg'

import EmailModal from '@/components/EmailModal'

export default {
  components: {
    Weixin,
    Instagram,
    EmailIcon,
    YouTube,
    EmailModal,
  },
  methods: {
    show(modalName) {
      this.$modal.show(modalName)
    },
    hide() {
      this.$modal.hide(modalName)
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>
