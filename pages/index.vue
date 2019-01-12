<template>
  <div class="photo-bg bg-pink-lightest">
    <section class="cta flex flex-col justify-center px-8 text-pink-darkest">
      <h3 class="text-4xl mb-4 font-medium tracking-wide">Hello,</h3>
      <h2 class="main-title font-medium tracking-wide">I'm Soline <span id="dot" /></h2>
    </section>
    <section class="flex justify-end pr-8">
      <p class="text-center w-24 text-lg text-pink-light italic">
        I make your <b>true beauty</b>
        stand out.
      </p>
    </section>
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
  margin-left: -15px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #f9007d;
}
</style>
