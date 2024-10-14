<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  courses: Array,
  isLoading: Boolean
})

const searchValue = ref('')

const filteredCourses = computed(() => {
  if (!searchValue.value) return props.courses
  const lowerCaseValue = searchValue.value.toLowerCase()
  return props.courses.filter(course => 
    course.title.toLowerCase().includes(lowerCaseValue) ||
    course.bootcamp.name.toLowerCase().includes(lowerCaseValue) ||
    course.minimumSkill.toLowerCase().includes(lowerCaseValue)
  )
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Bootcamp Courses</h1>

      <!-- Search Input -->
      <div class="flex justify-center mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for a course"
          class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div v-if="isLoading" class="flex justify-center items-center h-screen mt-10"><svg class='w-24 h-24 animate-spin' fill='#1e40af' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg></div>

      <div v-if="filteredCourses.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="course in filteredCourses" :key="course._id" class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">{{ course.title }}</h2>
          <p class="text-gray-700 mb-2"><strong>Description: </strong>{{ course.description }}</p>
          <p class="text-gray-700 mb-2"><strong>Weeks: </strong>{{ course.weeks }} weeks</p>
          <p class="text-gray-700 mb-2"><strong>Tuition: </strong>${{ course.tuition }}</p>
          <p class="text-gray-700 mb-2"><strong>Minimum Skill: </strong>{{ course.minimumSkill }}</p>
          <p :class="['font-semibold', course.scholarshipAvailable ? 'text-green-600' : 'text-red-600']">
            <strong>Scholarship Available: </strong>{{ course.scholarshipAvailable ? 'Yes' : 'No' }}
          </p>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-blue-500 mb-2">Bootcamp Info</h3>
            <p class="text-gray-700 mb-1"><strong>Bootcamp: </strong>{{ course.bootcamp.name }}</p>
            <p class="text-gray-700"><strong>Description: </strong>{{ course.bootcamp.description }}</p>
          </div>
          <button class="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-else class="text-center text-red-600 text-xl">
        No courses found matching "{{ searchQuery }}"
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
