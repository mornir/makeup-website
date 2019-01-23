<i18n>
{
  "en": {
    "hello": "Hello",
    "name": "I'm Soline",
    "catchPhrase": "I make your <b>true beauty</b> stand out.",
    "cta": "make it happen"
  },
  "fr": {
    "hello": "Bonjour",
    "name": "Je m'appelle\n Soline",
    "catchPhrase": "Je fais <b>ressortir votre beauté</b> intérieure.",
    "cta": "voir mes services"
  }
}
</i18n>

<template>
  <div class="photo-bg">
    <section class="cta flex flex-col justify-center text-pink-darkest mx-8">
      <h3 class="text-3xl mb-4 font-medium tracking-wide">{{ $t('hello') }},</h3>
      <h2 class="main-title font-semibold tracking-wide">{{ $t('name') }}<span id="dot" /></h2>
      <div class="hidden md:block">
        <p class="text-2xl text-pink-light py-8"
           v-html="$t('catchPhrase')" />
        <nuxt-link :to="localePath('makeups')"
                   class="text-sm uppercase self-start bg-pink text-pink-lightest px-4 py-2 rounded font-semibold tracking-wide no-underline">
          {{ $t('cta') }}
        </nuxt-link>
      </div>
    </section>
    <section class="flex flex-col items-end pr-8 md:hidden">
      <p class="text-center w-32 text-lg text-pink-light italic mb-8"
         v-html="$t('catchPhrase')" />
      <nuxt-link :to="localePath('makeups')"
                 class="text-sm bg-pink text-pink-lightest px-2 py-1 rounded font-semibold  no-underline shadow-md"> {{ $t('cta') }}
      </nuxt-link>
    </section>
    <div id="divider"
         class="hidden md:block" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.photo-bg {
  background-image: url('~assets/img/home.png');
  background-position: 0% bottom;
  background-repeat: no-repeat;
  background-size: 15rem;
  min-height: calc(100vh - var(--nav-height));
}

.cta {
  height: 40vh;
}

.main-title {
  font-size: 2.5rem;
}

#dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #f9007d;
}

@media (max-width: 350px) {
  .photo-bg {
    background-size: 10rem;
  }

  .main-title {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .cta {
    position: absolute;
    left: 55%;
    bottom: 0;
    height: 70vh;
  }

  .photo-bg {
    background-size: 25rem;
  }

  .main-title {
    font-size: 3rem;
  }
}

#divider {
  position: absolute;
  height: 118px;
  width: 1.8px;
  background-color: #f9007d;
  bottom: 0;
  left: calc(50% - 1.5px);
}
</style>
