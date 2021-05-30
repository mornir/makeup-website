<template>
  <footer>
    <div class="flex justify-center gap-x-8">
      <a
        href="https://www.instagram.com/solinewangmua/"
        target="_blank"
        aria-label="Check my Instragram"
      >
        <Instagram class="fill-current w-9" />
      </a>
      <button @click="showMailGo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </button>
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
