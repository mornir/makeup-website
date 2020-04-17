<template>
  <div class="bg-pink-200 text-pink-lightest height-minus-nav">
    <div class="max-w-md mx-auto">
      <section class="py-8 mx-4">
        <h1 class="pl-3 mb-4 text-3xl border-l-8 border-pink-alt">Follow me</h1>
        <p class="text-xl">
          I regularly share my work on Instagram and I have a YouTube channel
          where I make makeup tutorial videos (in Chinese).
        </p>
        <div class="flex mt-4 justify-evenly">
          <a
            href="https://www.instagram.com/solinewangmua/"
            target="_blank"
            rel="noopener"
            class="focus:outline-none"
          >
            <Instagram
              class="h-10 text-pink-900 fill-current hover:text-pink-alt"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCVeQ_Od2gp9OVRowSFJKPJw"
            target="_blank"
            rel="noopener"
            class="focus:outline-none"
          >
            <YouTube
              class="h-10 text-pink-900 fill-current hover:text-pink-alt"
            />
          </a>
        </div>
      </section>
      <section class="py-8 mx-4">
        <h1 class="pl-3 mb-4 text-3xl border-l-8 border-pink-alt">
          Contact me
        </h1>
        <p class="text-xl">
          Don’t hesitate to contact me. You can text me on Wechat and Whatsapp,
          or send me an email.
        </p>
        <div class="flex mt-4 justify-evenly">
          <a
            href="https://www.wechat.com/ECtmVhXr_IQ-OaG8r6GKGN8"
            target="_blank"
            rel="noopener nofollow"
            class="focus:outline-none"
          >
            <Weixin
              class="h-10 text-pink-900 fill-current hover:text-pink-alt"
            />
          </a>
          <a
            href="https://wa.me/410787498068"
            target="_blank"
            rel="noopener nofollow"
            class="focus:outline-none"
          >
            <Whatsapp
              class="h-10 text-pink-900 fill-current hover:text-pink-alt"
            />
          </a>
          <button @click="showEmail" class="focus:outline-none">
            <EmailIcon
              class="h-10 fill-current hover:text-pink-alt"
              :class="isEmailVisible ? 'text-pink-alt' : 'text-pink-900'"
            />
          </button>
        </div>

        <div class="pb-8 mt-8 ">
          <EmailForm v-show="isEmailVisible" ref="form" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
import Weixin from '@/assets/svg/weixin-brands.svg'
import Instagram from '@/assets/svg/instagram-brands.svg'
import YouTube from '@/assets/svg/youtube-brands.svg'
import Whatsapp from '@/assets/svg/whatsapp-brands.svg'

import EmailForm from '@/components/EmailForm'

export default {
  components: {
    Weixin,
    Instagram,
    EmailIcon,
    YouTube,
    EmailForm,
    Whatsapp,
  },
  data() {
    return {
      isEmailVisible: false,
    }
  },
  methods: {
    showEmail() {
      this.isEmailVisible = true
      //TODO: find more a more elegant solution
      if (!this.$refs.form.$el.scrollIntoView) return
      setTimeout(() => {
        this.$refs.form.$el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
  },
}
</script>
