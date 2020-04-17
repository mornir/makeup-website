<template>
  <div>
    <div class="max-w-lg mx-auto">
      <section class="py-8 mx-4">
        <TextHeading>Contact me</TextHeading>
        <p class="text-lg leading-relaxed lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          sunt.
        </p>
        <div></div>
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
        </div>
      </section>
      <div class="flex mt-4 justify-evenly">
        <a
          href="https://www.wechat.com/ECtmVhXr_IQ-OaG8r6GKGN8"
          target="_blank"
          rel="noopener nofollow"
          class="focus:outline-none"
        >
          <Weixin class="h-10 text-pink-900 fill-current hover:text-pink-alt" />
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

        <EmailIcon class="h-10 fill-current hover:text-pink-alt" />
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
import Weixin from '@/assets/svg/weixin-brands.svg'
import Instagram from '@/assets/svg/instagram-brands.svg'
import Whatsapp from '@/assets/svg/whatsapp-brands.svg'

export default {
  components: {
    Weixin,
    Instagram,
    EmailIcon,
    Whatsapp,
  },
}
</script>
