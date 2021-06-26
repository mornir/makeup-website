<template>
  <ModalGo :title="MailGoEmail" @close="close">
    <p class="mb-2 font-medium">Send email with:</p>
    <div class="flex flex-col items-center gap-y-4">
      <button class="contact-button" @click="openDefault">
        Default program
      </button>
      <button class="contact-button" @click="openGmail">
        Gmail.com
      </button>
      <button class="contact-button" @click="openOutlook">
        Outlook.com
      </button>
    </div>
  </ModalGo>
</template>

<script>
export default {
  name: 'MailGo',
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
