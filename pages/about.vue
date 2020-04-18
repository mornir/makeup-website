<template>
  <div class="c-grid md:pt-32 lg:pt-0">
    <section class="self-center px-4 py-8 lg:pl-24">
      <TextHeading>About me</TextHeading>
      <p class="text-lg leading-relaxed lg:text-xl">
        I am a Chinese makeup artist based in Switzerland. I master various
        techniques, show creativity and great passion. I immersed myself into
        the world of cosmetics ten years ago and I have kept the same passion. I
        studied in Makeup school Studio B in Lausanne and acquired my diploma as
        a professional makeup artist. I work for all occasions, but focus on
        wedding makeup and pre-wedding shooting.
      </p>
    </section>
    <section style="justify-self: end">
      <img
        src="~assets/img/contact_bg.jpg"
        alt="makeup"
        class="max-w-xs mx-auto lg:max-w-none lg:h-screen"
      />
    </section>
  </div>
</template>

<style lang="postcss" scoped>
@screen lg {
  .c-grid {
    display: grid;
    grid-template-columns: 2fr minmax(35rem, 1fr);
  }
}
</style>
