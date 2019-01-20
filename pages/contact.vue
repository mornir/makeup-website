<template>
  <div class="text-pink-lightest">
    <section class="mb-8">
      <h2 class="mb-4 pl-3 border-l-8 border-pink-alt">Contact</h2>
      <p>Don’t hesitate to contact me. You can also find my creations on instragam, on my portfolio and on youtube.</p>
    </section>
    <section>
      <article class="max-w-sm">
        <header class="bg-pink-lighter pl-3 py-1 rounded-t-lg">

          <!--        <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               class="h-8">
            <path class="primary"
                  d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z" />
            <path class="secondary"
                  d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" /></svg> -->

          <svg width="30"
               height="30"
               viewBox="0 0 30 30"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.1085 10.0456H25.7779V1.08752H4.40864V10.0456H2.87467C1.34643 10.0456 0.103638 11.288 0.103638 12.8166V26.3206C0.103638 27.8475 1.34643 29.0916 2.87467 29.0916H27.1085C28.6372 29.0916 29.8795 27.8475 29.8795 26.3206V12.8166C29.8795 11.288 28.6389 10.0456 27.1085 10.0456ZM11.152 18.1469L1.95437 26.2399V12.8166C1.95437 12.7491 1.9804 12.6909 1.99231 12.6305L11.152 18.1469ZM12.8135 19.148L14.5195 20.175C14.5248 20.1768 14.5297 20.1768 14.535 20.1786C14.6744 20.2597 14.8314 20.3043 14.9933 20.3043C15.1553 20.3043 15.3123 20.2597 15.4553 20.1786C15.4588 20.175 15.4641 20.1768 15.4689 20.175L17.5681 18.9119L27.0379 27.2444H3.60878L12.8135 19.148ZM19.2278 17.9127L27.9961 12.6305C28.0098 12.6909 28.0358 12.7491 28.0358 12.8184V25.6624L19.2278 17.9127ZM6.25584 2.93473H23.9325V12.9181L14.9951 18.3053L6.25584 13.0421V2.93473ZM4.40864 11.9325L4.3429 11.8928H4.40864V11.9325Z"
                  fill="black" />
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.62895 8.71502H15.0622C15.5726 8.71502 15.986 8.29943 15.986 7.79119C15.986 7.28119 15.5726 6.86737 15.0622 6.86737H8.62895C8.12071 6.86737 7.70557 7.28119 7.70557 7.79119C7.70733 8.30119 8.11895 8.71502 8.62895 8.71502Z"
                  fill="black" />
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.74633 6.0402H14.9228C15.4328 6.0402 15.8466 5.62682 15.8466 5.11682C15.8466 4.60638 15.4328 4.19299 14.9228 4.19299H8.74633C8.23633 4.19299 7.82251 4.60638 7.82251 5.11682C7.82251 5.62682 8.23633 6.0402 8.74633 6.0402Z"
                  fill="black" />
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.82251 10.4281C7.82251 10.9381 8.23633 11.3515 8.74633 11.3515H18.6194C19.1294 11.3515 19.5432 10.9381 19.5432 10.4281C19.5432 9.91765 19.1294 9.50427 18.6194 9.50427H8.74633C8.23633 9.50427 7.82251 9.91765 7.82251 10.4281Z"
                  fill="black" />
          </svg>

        </header>
        <form class="bg-pink-light  bg-pink-lightest rounded-b-lg">
          <section class="font-semibold px-6 pt-6 pb-2 border-b-2 border-dotted border-pink-lighter">
            <div class="mb-2 contact-form">
              <label for="email"
                     class="text-pink-darkest">From:</label>
              <input type="email"
                     class="bg-transparent focus:outline-none text-pink-alt font-semibold"
                     name="email"
                     placeholder="your@email.com">
            </div>
            <div class="mb-2 contact-form">
              <span class="text-pink-darkest">To:</span><span class="text-pink-alt font-semibold">Soline Wang</span>
            </div>
            <div class="mb-2 contact-form">
              <label for="subject"
                     class="text-pink-darkest">Subject:</label>
              <input type="text"
                     class="bg-transparent focus:outline-none text-pink-alt font-semibold"
                     name="subject"
                     placeholder="your subject">
            </div>
          </section>
          <section class="px-6 pt-3">
            <textarea name="body"
                      cols="30"
                      rows="10"
                      placeholder="Enter your message here"
                      class="text-pink-alt font-semibold w-full bg-transparent resize-none focus:outline-none"
                      v-model="body" />
            </section>
          <footer class="px-6 pb-6 flex flex-col">
            <div>
            <p class="text-pink-alt font-semibold">Best regards,
            </p>
            <input type="text"
             class="bg-transparent focus:outline-none text-pink-alt font-semibold"
                   placeholder="Your name">
                   </div>
            <button class="self-end text-sm bg-pink text-pink-lightest px-2 py-1 rounded font-semibold  no-underline shadow-md">email me</button>
          </footer>
        </form>
      </article>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subject: '',
      body: '',
    }
  },
}
</script>

<style scoped>
.contact-form {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

input {
  caret-color: magenta !important;
}
</style>
