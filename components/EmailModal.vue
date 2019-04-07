<template>
  <modal name="email"
         adaptive
         height="auto">
    <article>
      <header class="bg-pink-lighter pl-5 py-1 rounded-t-lg">

        <EmailIcon class="h-8 text-black fill-current" />
      </header>
      <form method="POST"
            name="contact"
            netlify-honeypot="bot-field"
            data-netlify="true"
            class="bg-pink-light  bg-pink-lightest rounded-b-lg">
        <section class="font-semibold px-6 pt-6 pb-3 border-b-2 border-dotted border-pink-lighter contact-form">

          <label for="email"
                 class="text-pink-darkest">From:</label>

          <input type="email"
                 class="bg-transparent focus:outline-none text-pink-alt font-semibold"
                 name="email"
                 required
                 placeholder="your@email.com">

          <span class="text-pink-darkest">To:</span>
          <span class="text-pink-alt font-semibold">Soline Wang</span>
          <label for="subject"
                 class="text-pink-darkest">Subject:</label>

          <input type="text"
                 class="bg-transparent focus:outline-none text-pink-alt font-semibold"
                 name="subject"
                 required
                 placeholder="your subject"
                 v-model="subject">

        </section>
        <section class="px-6 pt-3">
          <textarea name="message"
                    required
                    cols="30"
                    rows="10"
                    placeholder="Enter your message here"
                    class="text-pink-alt font-semibold w-full bg-transparent resize-none focus:outline-none"
                    v-model="message" />
          </section>
          <footer class="px-6 pb-6 flex flex-col">
            <div>
            <p class="text-pink-alt font-semibold">Best regards,
            </p>
            <p class="hidden">
          <label>Don’t fill this out if you're human:
            <input name="bot-field">
            <input type="hidden" name="form-name" value="contact">
          </label>
        </p>
            <input type="text"
            name="name"
            required
             class="bg-transparent focus:outline-none text-pink-alt font-semibold"
                   placeholder="Your name">
            </div>
            <button type="submit" class="self-end text-sm bg-pink text-pink-lightest px-2 py-1 rounded font-semibold  no-underline shadow-md">email me</button>
          </footer>
        </form>
      </article>
</modal>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
export default {
  components: {
    EmailIcon,
  },
  data() {
    return {
      email: '',
      subject: '',
      message: '',
    }
  },
}
</script>

<style scoped>
.contact-form {
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 0.5rem;
}

input {
  caret-color: magenta;
}
</style>
