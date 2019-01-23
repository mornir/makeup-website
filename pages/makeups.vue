<template>
  <div class="pb-8">
    <section>
      <h1 class="text-center text-pink-lightest mt-8">Makeups</h1>
      <div class="flex justify-center flex-wrap">
        <AppPackage v-for="makeup in makeups"
                    :key="makeup.slug"
                    :makeup="makeup" />
      </div>
    </section>

    <section>
      <h1 class="text-center text-pink-lightest mt-8">Courses</h1>
      <div class="flex justify-center flex-wrap">
        <AppPackage v-for="course in courses"
                    :key="course.slug"
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
          desc: 'Get better a particular area',
          features: [
            'Choose your own theme (base makeup, eye makeup, etc.)',
            'Learn tips and tricks',
          ],
          price: 99,
        },
        {
          title: 'Comprehensive Course',
          slug: 'comprehensive-makeup-course',
          desc: 'Master the arts of making up',
          features: [
            'No prior knowledge required',
            'Learn how to choose the best products',
          ],
          price: 500,
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
/* .makeups-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  justify-content: center;
 
} */
</style>
