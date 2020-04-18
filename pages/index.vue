<template>
  <div>
    <h1
      class="absolute top-0 pl-4 text-5xl font-medium tracking-normal md:hidden"
    >
      Soline Wang
    </h1>
    <section class="flex items-end my-bg h-mobile md:h-screen" />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="postcss" scoped>
.my-bg {
  background-image: url('~assets/img/homepage_bg.jpg');
  background-size: cover;
  background-position: 31% bottom;
  background-repeat: no-repeat;
}

@screen md {
  .my-bg {
    background-position: center 75%;
  }
}

h1 {
  font-family: 'Grand Hotel', cursive;
}
</style>
