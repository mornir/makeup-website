<template>
  <header
    class="items-center justify-between hidden px-2 md:flex md:16px lg:px-24"
  >
    <n-link to="/" class="no-underline text-pink-darkest ">
      <h1 class="text-5xl font-medium tracking-normal md:text-6xl">
        Soline Wang
      </h1>
    </n-link>

    <nav>
      <n-link
        to="/about"
        class="mx-4 text-xl font-semibold uppercase desktop-link nav-element"
      >
        about me
      </n-link>

      <n-link
        to="/portfolio"
        class="mx-4 text-xl font-semibold uppercase desktop-link nav-element"
      >
        portfolio</n-link
      >

      <n-link
        class="px-6 py-2 mx-4 text-xl font-semibold text-white uppercase bg-black"
        to="/contact"
        >Contact</n-link
      >
    </nav>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(rgba(255, 255, 255, 0.4) 60%, transparent);
}

h1 {
  font-family: 'Grand Hotel', cursive;
}

.nav-element {
  text-decoration: none;
  color: inherit;
  position: relative;
}

.desktop-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -1.5px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.desktop-link:hover::before {
  transform: scaleX(1);
}

.nav-element.active-link::before {
  content: '';
  position: absolute;
  width: 100%;
  bottom: -1.5px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(1);
}
</style>
