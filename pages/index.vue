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

  <section class="my-bg height-minus-nav">
    <div class="absolute pin-l pin-b w-full md:w-auto bg-pink-darker my-purple-circle ">

      <h3 class="text-xl md:text-4xl mb-4 font-medium tracking-wide text-white inline-block md:block">{{ $t('hello') }},</h3>

      <h2 class="main-title  font-semibold tracking-wide text-white inline-block md:block md:mb-4">{{ $t('name') }}</h2>

      <p class="text-xl md:text-3xl pb-12 md:pb-0 text-pink-lighter "
         v-html="$t('catchPhrase')" />

    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.my-purple-circle {
  padding: 1rem 2rem;
}

.main-title {
  font-size: 2rem;
}

.my-bg {
  background-image: url('~assets/img/bg-home.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  .main-title {
    font-size: 3.5rem;
  }
  .my-purple-circle {
    border-top-right-radius: 100%;
    padding: 8rem 2rem 4rem;
  }
}

.my-bg {
  background-image: url('~assets/img/bg-home.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
