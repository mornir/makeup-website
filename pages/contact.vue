<template>
  <div class="h-screen bg-secondary">
    <div class="max-w-lg pt-32 mx-auto">
      <section class="pb-8 mx-4">
        <TextHeading>Contact me</TextHeading>
        <p class="text-lg leading-relaxed lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          sunt.
        </p>
      </section>
      <section class="justify-center h-full c-subgrid">
        <a
          href="https://www.instagram.com/solinewangmua/"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center focus:outline-none bg-primary"
        >
          <Instagram class="h-16 fill-current" />
        </a>

        <a
          href="https://www.wechat.com/ECtmVhXr_IQ-OaG8r6GKGN8"
          target="_blank"
          rel="noopener nofollow"
          class="flex items-center justify-center col-start-2 row-start-2 focus:outline-none bg-primary"
        >
          <Weixin class="h-16 fill-current" />
        </a>
        <a
          href="https://wa.me/410787498068"
          target="_blank"
          rel="noopener nofollow"
          class="flex items-center justify-center col-start-1 row-start-3 md:col-start-3 md:row-start-1 focus:outline-none bg-primary"
        >
          <Whatsapp class="h-16 fill-current" />
        </a>
        <button
          class="flex items-center justify-center col-start-2 row-start-4 md:col-start-4 md:row-start-2 bg-primary"
        >
          <EmailIcon class="h-12 fill-current" />
        </button>
      </section>
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

<style  lang="postcss" scoped>
.c-subgrid {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-auto-rows: 100px;
  grid-row-gap: 1rem;
  grid-column-gap: 0.5rem;
}

@screen md {
  .c-subgrid {
    grid-template-columns: repeat(4, 100px);
    grid-column-gap: 1.5rem;
    grid-row-gap: 1rem;
  }
}
</style>
