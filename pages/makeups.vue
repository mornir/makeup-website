<template>
  <div class="pb-8">
    <section>
      <h1 class="text-center text-pink-lightest my-8">Makeups</h1>
      <div class="makeups-grid">
        <AppPackage v-for="makeup in makeups"
                    :key="makeup.title"
                    :makeup="makeup" />
      </div>
    </section>

    <section>
      <h1 class="text-center text-pink-lightest my-8">Courses</h1>
      <div class="makeups-grid">
        <AppPackage v-for="course in courses"
                    :key="course.title"
                    :makeup="course" />
      </div>
    </section>
  </div>
</template>

<script>
import Package from '@/components/Package'
export default {
  data() {
    return {
      makeups: [
        {
          title: 'Bridal Makeup',
          slug: 'bridal-makeup',
          desc: 'Look at your best on this unique day.',
          features: ['Test included', 'Only 50 CHF per additional quest'],
          price: 190,
        },
        {
          title: 'Occasional Makeup',
          slug: 'occasional-makeup',
          desc: 'Have all eyes gaze on you.',
          features: [
            'For all sorts of occasions!',
            'Only 40 CHF per additional guest',
          ],
          price: 90,
        },
      ],
      courses: [
        {
          title: 'Private Course',
          slug: 'private-course',
          desc: 'lorem ipsum',
          features: ['Choose your own theme (base makeup, eye makeup, etc.)'],
        },
        {
          title: 'Comprehensive Course',
          slug: 'comprehensive-makeup-course',
          desc: 'lorem ipsum',
          features: ['Choose your own theme (base makeup, eye makeup, etc.)'],
        },
      ],
    }
  },
  components: {
    AppPackage: Package,
  },
}
</script>

<style>
.makeups-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  justify-content: center;
  /*grid-template-columns: repeat(2, minmax(1fr, 10rem));*/
}
</style>
