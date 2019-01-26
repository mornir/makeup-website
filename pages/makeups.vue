<template>
  <div class="pb-8">
    <section>
      <h1 class="text-center text-pink-lightest mt-8 mb-2">Makeups</h1>
      <div class="divider w-48 bg-pink-lightest mx-auto" />
      <div class="flex justify-center items-end flex-wrap">
        <AppPackage v-for="makeup in makeups"
                    :key="makeup.slug"
                    :makeup="makeup" />
      </div>
    </section>

    <section>
      <h1 class="text-center text-pink-lightest mt-8 mb-2">Courses</h1>
      <div class="divider w-48 bg-pink-lightest mx-auto" />
      <div class="flex justify-center items-end flex-wrap">
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
          price: 200,
        },
        {
          title: 'Occasional Makeup',
          slug: 'occasional-makeup',
          desc: 'Have all eyes gaze on you.',
          features: ['For all sorts of occasions'],
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
          price: 100,
        },
        {
          title: 'Comprehensive Course',
          slug: 'comprehensive-makeup-course',
          desc: 'Master the arts of making up',
          features: [
            'No prior knowledge required',
            'Learn how to choose the best products',
            '6 hours course',
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

<style scoped>
.divider {
  height: 0.15rem;
}
</style>
