<template>
  <div class="c-grid md:pt-32 lg:pt-0">
    <section class="self-center px-4 py-8 lg:pl-24">
      <TextHeading>About me</TextHeading>
      <p class="max-w-xl text-lg leading-relaxed lg:text-xl">
        Hi, I’m Soline, a Chinese Makeup artist based in Switzerland and ready to travel in Europe if needed. Makeup to me is more than a job or a career, it is how I define myself as the way I want to be. It has become a motivation of my life to help others find their own beauty. After I graduated from the integral makeup course in Lausanne, I specialized in the field of makeup for weddings and pre-weddings. During these years I got chance to work with talented photographers who are famous for their works. It will be my pleasure to work for you, and I’m looking forward to discovering your unique beauty.
      </p>
    </section>
    <section style="justify-self: end">
      <img
        src="@/assets/img/contact_bg.jpg"
        alt="makeup"
        class="object-contain max-w-xs mx-auto lg:max-w-lg xl:max-w-none xl:h-screen"
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
