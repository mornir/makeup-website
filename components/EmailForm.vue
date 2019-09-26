<template>
  <div>
    <form v-if="!submitted"
          @submit.prevent
          @submit.prevent.once="submit"
          :name="form['form-name']"
          netlify-honeypot="bot-field"
          data-netlify="true"
          class="bg-pink-100 rounded-lg">
      <section class="font-semibold px-6 pt-6 pb-3 border-b-2 border-dotted border-pink-lighter contact-form text-left">

        <label for="email"
               class="text-pink-darkest">From:</label>

        <input type="email"
               class="bg-transparent focus:outline-none text-pink-alt font-semibold"
               name="email"
               v-model="form.email"
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
               v-model="form.subject">

      </section>
      <section class="px-6 pt-3">
        <textarea name="message"
                  required
                  cols="30"
                  rows="10"
                  placeholder="Enter your message here"
                  class="text-pink-alt font-semibold w-full bg-transparent resize-none focus:outline-none"
                  v-model="form.message" />
        </section>
          <footer class="px-6 pb-6 flex flex-col text-left">
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
            <button type="submit" class="self-end text-sm bg-pink-alt text-pink-100 px-3 py-2 rounded font-semibold  no-underline shadow-md">email me</button>
          </footer>
        </form>

        <section v-else class="bg-pink-lightest text-black rounded-b-lg py-8">
          <div v-if="!isSubmitError">
          <h3 class="text-3xl">Thank You!</h3>
          <p class="text-xl">I'll get back to you as soon as possible 🙋🏻‍♀️</p>
          </div>
          <div v-else>
            <h3 class="text-3xl mb-2">Oops! Something went wrong. Sorry!</h3>
            <p class="text-xl">Just send me your message to <span class="text-pink-alt">solinefang@hotmail.com</span></p>
            <h4 class="mt-2" v-if="form.message">Here's copy of your message:</h4>
            <p class="text-left p-2">{{ form.message }}</p>
          </div>
        </section>
</div>
</template>

<script>
export default {
  name: 'EmailForm',
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: '',
        'form-name': 'contact',
      },
      submitted: false,
      isSubmitError: false,
    }
  },
  methods: {
    async submit() {
      try {
        const URLparams = new URLSearchParams(Object.entries(this.form))

        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }

        // Axios automatically stringifies URLparams
        await this.$axios.$post('/', URLparams, axiosConfig)
        this.submitted = true

        this.form = {
          email: '',
          subject: '',
          message: '',
          'form-name': 'contact',
        }
      } catch (e) {
        console.log(e)
        this.submitted = true
        this.isSubmitError = true
      }
    },
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
