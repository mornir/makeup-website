<i18n>
{
  "en": {
    "hello": "Hello",
    "name": "I'm Soline",
    "catchPhrase": "I make your <b>true beauty</b> stand out."
  },
  "fr": {
    "hello": "Bonjour",
    "name": "Je m'appelle\n Soline",
    "catchPhrase": "Je fais <b>ressortir votre beauté</b> intérieure."
  }
}
</i18n>

<template>
  <div class="absolute pin-l pin-b bg-pink-darker my-purple-circle">

    <div class="">
      <h3 class="text-4xl mb-4 font-medium tracking-wide text-white">{{ $t('hello') }},</h3>
      <h2 class="main-title  font-semibold tracking-wide text-white">{{ $t('name') }}</h2>
      <p class="text-3xl text-pink-lighter py-8"
         v-html="$t('catchPhrase')" />
    </div>
    <!--     <section class="cta flex flex-col justify-center text-pink-darkest mx-8">
      <h3 class="text-3xl mb-4 font-medium tracking-wide">{{ $t('hello') }},</h3>
      <h2 class="main-title font-semibold tracking-wide">{{ $t('name') }}</h2>
      <div class="hidden md:block">
        <p class="text-2xl text-pink-light py-8"
           v-html="$t('catchPhrase')" />
      </div>
    </section>
    <section class="flex flex-col items-end pr-8 md:hidden">
      <p class="text-center w-32 text-lg text-pink-light italic mb-8"
         v-html="$t('catchPhrase')" />
    </section> -->

  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .my-purple-circle {
  border-radius: 50%;
  width: 50rem;
  height: 50rem;
  left: -25rem;
  bottom: -25rem;
}
 */
/* .my-purple-circle {
  border-radius: 50% 150% 0 0;

  width: 32rem;
  height: 28rem;
  left: -5rem;
  bottom: 0;
} */
.main-title {
  font-size: 3.5rem;
}
.my-purple-circle {
  border-top-right-radius: 100%;
  padding: 8rem 4rem 4rem;
}
</style>
