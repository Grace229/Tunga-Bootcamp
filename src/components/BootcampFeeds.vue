<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import SearchComponent from './SearchComponent.vue'
const router = useRouter();

const props = defineProps({
  bootcamps: Array,
  isLoading: Boolean
})
const filteredBootcamps = ref([])
onMounted(() =>{
filteredBootcamps.value = props.bootcamps
})
const searchItem = ref('')
const filterBootcamps = (searchValue) => {
  searchItem.value = searchValue
      const searchText = searchValue.toLowerCase().trim();
      
      filteredBootcamps.value = props.bootcamps.filter(bootcamp => {
        const bootcampName = bootcamp.name.toLowerCase();
        const bootcampDescription = bootcamp.description.toLowerCase();
        const coursesText = bootcamp.courses.map(course => course.title.toLowerCase()).join(" ");
        
        return (
          bootcampName.includes(searchText) ||
          bootcampDescription.includes(searchText) ||
          coursesText.includes(searchText)
        );
      });
    };

const seeMore = (id)=> {
router.push(`/course-details/${id}`)
}
</script>

<template>
 <div class="container mx-auto p-4">
    <h1 class="text-3xl font-extrabold text-center mb-10 text-gray-800">Bootcamp Listings</h1>
    <SearchComponent @filterBootcamps="filterBootcamps" />
      <div v-if="isLoading" class="flex justify-center items-center h-screen mt-10"><svg class='w-24 h-24 animate-spin' fill='#1e40af' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg></div>
      <div v-else>
        <div
        v-if="filteredBootcamps.length"
      v-for="bootcamp in filteredBootcamps"
      :key="bootcamp._id"
      class="bg-white shadow-lg rounded-lg overflow-hidden mb-10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-2xl font-bold text-gray-800">{{ bootcamp.name }}</h2>
          <div class="flex space-x-2">
            <span v-if="bootcamp.housing" class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              Housing
            </span>
            <span v-if="bootcamp.jobAssistance" class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              Job Assistance
            </span>
            <span v-if="bootcamp.jobGuarantee" class="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
              Job Guarantee
            </span>
            <span v-if="bootcamp.acceptGi" class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
              GI Accepted
            </span>
          </div>
        </div>

        <p class="text-gray-600 mb-4">{{ bootcamp.description }}</p>

        <div class="flex flex-wrap items-center mb-6">
          <div class="flex items-center mr-6 mb-2">
            <span class="text-gray-500 font-semibold">Average Cost:</span>
            <span class="ml-2 text-gray-700">${{ bootcamp.averageCost }}</span>
          </div>
          <div class="flex items-center mb-2">
            <span class="text-gray-500 font-semibold">Careers:</span>
            <span class="ml-2 text-gray-700">{{ bootcamp.careers.join(", ") }}</span>
          </div>
        </div>

        <div class="flex space-x-4 mb-4">
          <a :href="bootcamp.website" target="_blank" class="text-blue-500 hover:text-blue-600 font-semibold">
            Website
          </a>
          <p><strong>Email:</strong> <a href="mailto:{{ bootcamp.email }}" class="text-blue-500 hover:text-blue-600">{{ bootcamp.email }}</a></p>
          <p><strong>Phone:</strong> {{ bootcamp.phone }}</p>
          <p><strong>Address:</strong> {{ bootcamp.address }}</p>
        </div>

        <div class="mt-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Courses Offered</h3>
          <div
            v-for="course in bootcamp.courses"
            :key="course._id"
            class="bg-gray-100 rounded-lg p-4 mb-4"
          >
            <div class="flex justify-between items-center">
              <h4 class="font-semibold text-gray-800">{{ course.title }}</h4>
              <span class="text-sm text-gray-600">Skill Level: {{ course.minimumSkill }}</span>
            </div>
            <p class="text-gray-600 text-sm">{{ course.description }}</p>
            <div class="mt-2 text-sm text-gray-700">
              <span><strong>Duration:</strong> {{ course.weeks }} weeks</span>
              <span class="ml-4"><strong>Tuition:</strong> ${{ course.tuition }}</span>
              <span v-if="course.scholarshipAvailable" class="ml-4 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                Scholarships Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-red-600 text-xl">
        No courses found matching "{{ searchItem }}"
      </div>
      </div>
      </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
