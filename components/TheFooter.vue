<template>
  <footer>
    <p>
      <button>Give me a phone call</button> or
      <button @click="showMailGo">send me an email</button>
    </p>
    <div>
      <a
        href="https://www.instagram.com/solinewangmua/"
        target="_blank"
        aria-label="Check my Instragram"
      >
        <Instagram class="w-8 fill-current" />
      </a>
    </div>
    <MailGo v-if="showMailGo" @close="showMailGo = false" />
  </footer>
</template>

<script>
import Instagram from '@/assets/svg/instagram-brands.svg'

export default {
  components: {
    Instagram,
  },
  data() {
    return {
      showMailGo: false,
    }
  },
}
</script>
