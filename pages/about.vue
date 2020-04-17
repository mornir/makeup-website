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
  <div class="h-screen bg-secondary">
    <div class="c-grid">
      <section class="self-center px-4 py-8 lg:pl-24">
        <h1 class="pl-3 mb-4 text-2xl border-l-8 lg:text-3xl border-primary">
          {{ $t('title') }}
        </h1>
        <p class="pb-6 text-lg leading-relaxed lg:text-xl">
          {{ $t('text') }}
        </p>
      </section>
      <section style="justify-self: end">
        <img src="~assets/img/image 2.jpg" alt="makeup" class="h-screen " />
      </section>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@screen lg {
  .c-grid {
    display: grid;
    grid-template-columns: 2fr minmax(40rem, 1fr);
  }
}
</style>
