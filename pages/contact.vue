
<template>
  <div>
    <div class="text-pink-lightest bg-pink-darkest height-contact-page">
      <div class="max-w-sm mx-auto">
        <section class="py-8 mx-4">
          <h2 class="mb-4 pl-3 border-l-8 border-pink-alt text-3xl">Contact</h2>
          <p class="text-xl">Don’t hesitate to contact me. You can also find my creations on instragam, on my portfolio and on youtube.</p>
        </section>
        <section class="flex justify-around">
          <button @click="showQRcode"
                  class="focus:outline-none">
            <Weixin class="h-10 fill-current hover:text-pink-alt"
                    :class="isQRcodeVisible ? 'text-pink-alt' : 'text-pink-lighter'" />
          </button>
          <a href="https://www.instagram.com/solinewangmua/"
             target="_blank"
             rel="noopener"
             class="focus:outline-none">
            <Instagram class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
          </a>
          <a href="https://www.youtube.com/channel/UCVeQ_Od2gp9OVRowSFJKPJw"
             target="_blank"
             rel="noopener"
             class="focus:outline-none">
            <YouTube class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
          </a>

          <button @click="showEmail"
                  class="focus:outline-none">
            <EmailIcon class="h-10 fill-current hover:text-pink-alt "
                       :class="isEmailVisible ? 'text-pink-alt' : 'text-pink-lighter'" />
          </button>

        </section>

        <section class="mt-8 pb-8 text-center">

          <EmailForm v-show="isEmailVisible"
                     ref="form" />

          <img src="@/assets/img/weixin_qr_code.jpg"
               class="h-64"
               alt="Weixin QR Code"
               v-if="isQRcodeVisible">
        </section>

      </div>

    </div>

  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
import Weixin from '@/assets/svg/weixin-brands.svg'
import Instagram from '@/assets/svg/instagram-brands.svg'
import YouTube from '@/assets/svg/youtube-brands.svg'

import EmailForm from '@/components/EmailForm'

export default {
  components: {
    Weixin,
    Instagram,
    EmailIcon,
    YouTube,
    EmailForm,
  },

  data() {
    return {
      isEmailVisible: false,
      isQRcodeVisible: false,
    }
  },
  methods: {
    closeAll() {
      this.isEmailVisible = false
      this.isQRcodeVisible = false
    },
    showEmail() {
      this.closeAll()
      this.isEmailVisible = true
      //TODO: find more a more elegant solution

      if (!this.$refs.form.$el.scrollIntoView) return

      setTimeout(() => {
        this.$refs.form.$el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
    showQRcode() {
      this.closeAll()
      this.isQRcodeVisible = true
    },
  },
}
</script>

<style scoped lang="postcss">
.height-contact-page {
  min-height: calc(100vh - var(--nav-height));
}

button:focus svg,
a:focus svg {
  @apply text-pink-alt;
}
</style>
