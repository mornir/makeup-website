<i18n>
{
  "en": {
    "hello": "Hello",
    "name": "I'm Soline"
  },
  "fr": {
    "hello": "Bonjour",
    "name": "Je suis Soline"
  }
}
</i18n>

<template>
  <div class="photo-bg">
    <section class="cta flex flex-col justify-center px-8 text-pink-darkest">
      <h3 class="text-4xl mb-4 font-medium tracking-wide">{{ $t('hello') }},</h3>
      <h2 class="main-title font-medium tracking-wide">{{ $t('name') }}<span id="dot" /></h2>
      <p class="hidden md:block text-2xl text-pink-light pt-8"> I make your <b>true beauty</b>
        stand out.</p>
    </section>
    <section class="flex justify-end pr-8">
      <p class="text-center w-24 text-lg text-pink-light italic md:hidden">
        I make your <b>true beauty</b>
        stand out.
      </p>
    </section>
    <div id="divider"
         class="hidden md:block" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.photo-bg {
  background-image: url('~assets/img/home.png');
  background-position: 0% bottom;
  background-repeat: no-repeat;
  background-size: 40vh;
  min-height: calc(100vh - var(--nav-height) + 5vh);
}

.cta {
  height: 50vh;
}

.main-title {
  font-size: 3.5rem;
}

#dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #f9007d;
}

@media (min-width: 768px) {
  .cta {
    position: absolute;
    /* right: 5%; */
    left: 55%;
    bottom: 0;
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
