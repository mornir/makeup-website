<template>
  <div class="min-h-screen bg-secondary">
    <section class="max-w-lg pt-8 mx-auto md:pt-32">
      <div class="pb-8 mx-4">
        <TextHeading>Contact me</TextHeading>
      </div>
      <div class="justify-center h-full c-subgrid">
        <a
          href="https://www.instagram.com/solinewangmua/"
          target="_blank"
          rel="noopener"
          class="c-social-share"
        >
          <Instagram class="h-16 fill-current" />
        </a>

        <a
          href="https://www.wechat.com/ECtmVhXr_IQ-OaG8r6GKGN8"
          target="_blank"
          rel="noopener"
          class="col-start-2 row-start-2 c-social-share"
        >
          <Weixin class="h-16 fill-current" />
        </a>
        <a
          href="https://wa.me/410787498068"
          target="_blank"
          rel="noopener"
          class="col-start-1 row-start-3 c-social-share md:col-start-3 md:row-start-1"
        >
          <Whatsapp class="h-16 fill-current" />
        </a>
        <button
          class="col-start-2 row-start-4 c-social-share md:col-start-4 md:row-start-2"
          @click="showMailGo = true"
        >
          <EmailIcon class="h-12 fill-current" />
        </button>
      </div>
    </section>
    <MailGo v-if="showMailGo" @closeMailGo="showMailGo = false" />
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
import Weixin from '@/assets/svg/weixin-brands.svg'
import Instagram from '@/assets/svg/instagram-brands.svg'
import Whatsapp from '@/assets/svg/whatsapp-brands.svg'
import MailGo from '@/components/MailGo'

export default {
  components: {
    Weixin,
    Instagram,
    EmailIcon,
    Whatsapp,
    MailGo,
  },
  data() {
    return {
      showMailGo: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
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

.c-social-share {
  @apply flex items-center justify-center bg-primary transition-colors duration-200 border-4 border-primary;
}

.c-social-share:hover {
  @apply text-primary bg-secondary;
}
</style>
