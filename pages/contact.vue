<template>
  <div class="text-pink-lightest bg-pink-darkest height-minus-nav">
    <div class="max-w-sm mx-auto">
      <section class="py-8">
        <h2 class="mb-4 pl-3 border-l-8 border-pink-alt">Contact</h2>
        <p class="text-xl">Don’t hesitate to contact me. You can also find my creations on instragam, on my portfolio and on youtube.</p>
      </section>
      <section class="flex justify-around">
        <button>
          <Weixin class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </button>
        <a href="#">
          <Instagram class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </a>
        <a href="#">
          <YouTube class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </a>

        <button @click="show">
          <EmailIcon class="h-10 text-pink-lighter fill-current hover:text-pink-alt" />
        </button>

      </section>
      <modal name="contact"
             draggable
             adaptive
             height="445">
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

</div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg'
import Weixin from '@/assets/svg/weixin-brands.svg'
import Instagram from '@/assets/svg/instagram-brands.svg'
import YouTube from '@/assets/svg/youtube-brands.svg'

export default {
  components: {
    Weixin,
    Instagram,
    EmailIcon,
    YouTube,
  },
  methods: {
    show() {
      this.$modal.show('contact')
    },
    hide() {
      this.$modal.hide('contact')
    },
  },
  data() {
    return {
      email: '',
      subject: '',
      message: '',
      templates: [
        {
          title: 'Bridal Makeup',
          slug: 'bridal-makeup',
          msg:
            'Hey there! Me and my husband are planning a wedding and are looking for a makeup artist. Could we get in touch?',
        },
      ],
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
