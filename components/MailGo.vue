<template>
  <div
    class="fixed inset-0 z-10 flex items-end justify-center w-full h-screen sm:items-center bg-semi-75"
    @click.self="close"
  >
    <div
      class="w-full max-w-lg p-8 pb-32 text-center bg-white border-4 border-b-0 border-black shadow-lg sm:pb-8 sm:border-b-4"
    >
      <p class="mb-4 text-lg font-medium text-center">
        {{ MailGoEmail }}
      </p>
      <p class="mb-2 font-medium">Send email with:</p>
      <div class="flex flex-col items-center">
        <button
          class="px-2 py-1 mb-4 border border-black hover:border-primary hover:text-primary"
          @click="openDefault"
        >
          Default program
        </button>
        <button
          class="px-2 py-1 mb-4 border border-black hover:border-primary hover:text-primary"
          @click="openGmail"
        >
          Gmail.com
        </button>
        <button
          class="px-2 py-1 border border-black hover:border-primary hover:text-primary"
          @click="openOutlook"
        >
          Outlook.com
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MailGoEmail: 'solinefang@hotmail.com',
      MailGoSubject: 'Contact for makeup work',
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    openDefault() {
      const mailUrl = `mailto:${this.MailGoEmail}?subject=${this.MailGoSubject}`
      document.location.href = mailUrl
      this.close()
    },
    openOutlook() {
      const email = encodeURIComponent(this.MailGoEmail)
      const url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${this.MailGoSubject}`

      window.open(url, '_blank')
      this.close()
    },
    openGmail() {
      const email = encodeURIComponent(this.MailGoEmail)
      const url = `https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=${email}&subject=${this.MailGoSubject}`

      window.open(url, '_blank')
      this.close()
    },
  },
}
</script>
