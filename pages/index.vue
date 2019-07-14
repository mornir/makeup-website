<i18n>
{
  "en": {
    "hello": "Hello",
    "name": "I'm Soline",
    "catchPhrase": "I make your <b>true beauty</b> stand out.",
    "meta": {
      "description": "Professional makeup artist in Switzerland"
    }
  },
  "fr": {
    "hello": "Bonjour",
    "name": "Je m'appelle\n Soline",
    "catchPhrase": "Je fais <b>ressortir votre beauté</b> intérieure.",
    "meta": {
      "description": "Maquilleuse professionnelle suisse offre ses services de maquillage pour toute occasion."
    }
  }
}
</i18n>

<template>
  <div class=" bg-pink-darker">
    <section class="my-bg index-height-minus-nav">
      <div class="absolute left-0 bottom-0 w-full md:w-auto bg-pink-800 my-purple-circle ">

        <h3 class="text-xl md:text-4xl mb-4 font-medium tracking-wide text-white inline-block md:block">{{ $t('hello') }},</h3>

        <h2 class="main-title  font-semibold tracking-wide text-white inline-block md:block md:mb-4">{{ $t('name') }}</h2>

        <p class="text-xl md:text-3xl  text-pink-200 "
           v-html="$t('catchPhrase')" />

      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: 'description',
          content: this.$t('meta.description'),
        },
      ],
    }
  },
}
</script>

<style scoped lang="postcss">

.index-height-minus-nav {
  height: calc(100vh - var(--nav-height));
}

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
