<i18n>
{
  "en": {
    "title": "About me",
    "text": "I am an Chinese makeup artist based in Switzerland. I master various techniques, show creativity and great passion. I've thrown myself into the world of cosmetics for more than ten years, and the belief of beauty makes the change has only been stronger. I studied in Makeup school Studio B in Lausanne and acquired my diploma as a professional makeup artist. I work for all occasions, but focus on wedding makeup and pre-marriage shooting."
  },
  "fr": {
    "title": "À mon propos",
    "text": "Maquilleuse professionnelle, travaillant avec technique, créativité, patience et grande passion, je me suis lancée dans le monde du maquillage il y a plus de dix ans, et la quête de la beauté ne fait que renforcer ma détermination à perfectionner à mon art. J'ai étudié le maquillage à l'école Studio B à Lausanne, où j'ai obtenu mon diplôme de maquilleuse professionnelle. J'offre mes services de maquilleuses pour toute occasion."
  }
}
</i18n>

<template>

  <section class="h-full my-bg bg-pink-darkest text-pink-100 md:px-8 md:flex items-end">

    <div class="p-5 h-full  max-w-md bg-pink-800 md:bg-pink-darker md:rounded-lg">
      <h2 class="mb-4 pl-3 border-l-8 border-pink-alt text-3xl">{{ $t('title') }}</h2>
      <p class="text-lg text-xl leading-tight">
        {{ $t('text') }}</p>
    </div>
  </section>

</template>

<script>
export default {}
</script>

<style scoped lang="postcss">
@screen sm {
  .my-bg {
    background-image: url('~assets/img/bg-home.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
</style>
