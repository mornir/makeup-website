<template>
  <aside class="fixed bottom-0 w-full bg-primary-alt">
    <nav class="grid justify-center grid-cols-4">
      <BottomNavLink
        v-for="link in links"
        :key="link.linkPath"
        :svg-path="link.svgPath"
        :link-path="link.linkPath"
        >{{ link.label }}</BottomNavLink
      >
    </nav>
  </aside>
</template>

<script>
import BottomNavLink from '@/components/BottomNavLink.vue'
export default {
  components: {
    BottomNavLink,
  },
  data() {
    return {
      links: [
        {
          label: 'Home',
          linkPath: '/',
          svgPath:
            'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
        {
          label: 'About',
          linkPath: '/about',
          svgPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          label: 'Portfolio',
          linkPath: '/portfolio',
          svgPath:
            'M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z',
        },
        {
          label: 'Contact',
          linkPath: '/contact',
          svgPath:
            'M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207',
        },
      ],
    }
  },
}
</script>
