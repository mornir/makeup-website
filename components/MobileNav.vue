<template>
  <aside class="fixed bottom-0 w-full bg-primary">
    <nav class="grid justify-center grid-cols-3 ">
      <n-link to="/about" class="py-4 text-center border-r border-black">
        <svg viewBox="0 0 20 20" class="block w-8 h-8 mx-auto ">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xl font-semibold">About</span>
      </n-link>
      <n-link to="/portfolio" class="py-4 text-center border-r border-black">
        <svg viewBox="0 0 20 20" class="block w-8 h-8 mx-auto ">
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xl font-semibold">Portfolio</span>
      </n-link>
      <n-link to="/contact" class="py-4 text-xl text-center">
        <svg viewBox="0 0 20 20" class="block w-8 h-8 mx-auto">
          <path
            fill-rule="evenodd"
            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xl font-semibold">Contact</span>
      </n-link>
    </nav>
  </aside>
</template>

<script>
export default {}
</script>

<style></style>
