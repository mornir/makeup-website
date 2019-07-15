<i18n>
{
  "en": {
    "name": "I'm Soline",
    "catchPhrase": "I make your <b>true beauty</b> stand out.",
    "meta": {
      "description": "Professional makeup artist in Switzerland"
    }
  },
  "fr": {
    "name": "Je m'appelle\n Soline",
    "catchPhrase": "Je fais <b>ressortir votre beauté</b> intérieure.",
    "meta": {
      "description": "Maquilleuse professionnelle suisse offre ses services de maquillage pour toute occasion."
    }
  }
}
</i18n>

<template>
  <section class="bg-pink-200 my-bg height-minus-nav flex items-end ">
    <div class="w-full md:w-auto bg-pink-800 my-purple-circle">

      <h2 class="text-5xl font-semibold tracking-wide text-white inline-block md:block md:mb-4">{{ $t('name') }}</h2>

      <p class="pb-12 md:pb-0 text-2xl md:text-3xl text-pink-200"
         v-html="$t('catchPhrase')" />

    </div>
  </section>
</template>

<script>
export default {
  /*
  head() {
    return {
      meta: [
        {
          name: 'description',
          content: this.$t('meta.description'),
        },
      ],
    }
  },*/
}
</script>

<style scoped lang="postcss">
.my-purple-circle {
  padding: 1rem 2rem;
}

@media (min-width: 768px) {
  .my-purple-circle {
    border-top-right-radius: 100%;
    padding: 8rem 2rem 4rem;
  }
}
</style>
