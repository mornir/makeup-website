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
  <section class="flex items-end my-bg h-mobile md:h-screen" />
</template>

<script>
export default {
  name: 'Home',
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
// rgba(255, 255, 255, 0.8)
<style lang="postcss" scoped>
.my-bg {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4) 10%,
      17%,
      transparent 90%
    ),
    url('~assets/img/homepage_bg.jpg');
  background-size: cover;
  background-position: 31% bottom;
  background-repeat: no-repeat;
}

@screen md {
  .my-bg {
    background-position: center 75%;
  }
}
</style>
