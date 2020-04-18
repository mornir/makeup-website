<template>
  <div
    class="fixed inset-0 z-10 flex items-end justify-center w-full h-screen sm:items-center bg-semi-75"
    @click.self="close"
  >
    <div
      class="w-full max-w-lg p-8 text-center bg-white border-4 shadow-lg border-primary"
    >
      <p class="mb-4 text-lg font-medium text-center">
        {{ MailGoEmail }}
      </p>
      <p class="mb-2 font-medium">Send email with:</p>
      <div class="flex flex-col items-center">
        <button
          class="px-2 py-1 mb-2 border border-black hover:bg-gray-200"
          @click="openDefault"
        >
          Open default
        </button>
        <button
          class="px-2 py-1 mb-2 text-red-700 border border-red-700 hover:bg-red-100"
          @click="openGmail"
        >
          Open in Gmail
        </button>
        <button
          class="px-2 py-1 mb-2 text-blue-600 border border-blue-600 hover:bg-blue-100"
          @click="openOutlook"
        >
          Open in Outlook
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
