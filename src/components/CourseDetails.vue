<template>
   <div class="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
    <!-- Course Title -->
    <h1 class="text-2xl font-bold text-gray-900">{{ course.title }}</h1>
    
    <!-- Course Description -->
    <p class="text-gray-700">{{ course.description }}</p>

    <!-- Course Details -->
    <div class="mt-4">
      <p><span class="font-semibold">Duration:</span> {{ course.weeks }} weeks</p>
      <p><span class="font-semibold">Tuition:</span> ${{ course.tuition }}</p>
      <p><span class="font-semibold">Minimum Skill Level:</span> {{ course.minimumSkill }}</p>
      <p><span class="font-semibold">Scholarship Available:</span> 
        <span v-if="course.scholarshipAvailable" class="text-green-500">Yes</span>
        <span v-else class="text-red-500">No</span>
      </p>
    </div>

    <!-- Bootcamp Details Button -->
    <div class="mt-6">
      <button @click="seeMore(course.bootcamp.id)" 
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">See Bootcamp Details
      </button>
    </div>

    <!-- Bootcamp Details Section -->
    <!-- <div v-if="showBootcamp" class="mt-4 p-4 bg-gray-100 rounded-lg">
      <h2 class="text-xl font-semibold">Bootcamp: {{ course.bootcamp.name }}</h2>
      <p class="text-gray-700">{{ course.bootcamp.description }}</p>
    </div> -->
  </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
const props = defineProps({
    course: Object,
  isLoading: Boolean
})
const seeMore = (id)=> {
router.push(`/bootcamp-details/${id}`)
}
  </script>
  
  <style scoped>
  /* Add custom styling if needed */
  </style>
  