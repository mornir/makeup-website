<i18n>
{
  "en": {
    "title": "About me",
    "text": "I am a Chinese makeup artist based in Switzerland. I master various techniques, show creativity and great passion. I immersed myself into the world of cosmetics ten years ago and I have kept the same passion. I studied in Makeup school Studio B in Lausanne and acquired my diploma as a professional makeup artist. I work for all occasions, but focus on wedding makeup and pre-wedding shooting."
  },
  "fr": {
    "title": "À mon propos",
    "text": "Maquilleuse professionnelle, travaillant avec technique, créativité, patience et grande passion, je me suis lancée dans le monde du maquillage il y a plus de dix ans, et la quête de la beauté ne fait que renforcer ma détermination à perfectionner à mon art. J'ai étudié le maquillage à l'école Studio B à Lausanne, où j'ai obtenu mon diplôme de maquilleuse professionnelle. J'offre mes services de maquilleuses pour toute occasion."
  }
}
</i18n>

<template>
  <div class=" bg-pink-200 height-minus-nav">
    <div class="max-w-md mx-auto">
      <section class="p-5   max-w-md  md:rounded-lg">
        <h1 class="mb-4 pl-3 border-l-8 border-pink-alt text-3xl font-semibold">{{ $t('title') }}</h1>
        <p class="text-2xl pb-6 leading-tight">
          {{ $t('text') }}</p>
      </section>
    </div>
  </div>

</template>
