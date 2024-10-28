<script setup>
import{ ref, onMounted} from 'vue'
import CourseFeeds from '../components/CourseFeeds.vue';
import customInstance from '../axios_client.js'
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification()
const courses = ref([])
const isLoading = ref(false)
const fetchData = async () => {
        try {
          isLoading.value = true
          const response = await customInstance.get('/api/v1/courses');
          console.log(response.data)
         courses.value = response.data.data;
         notify({
        title: "Success",
        text: 'Successful',
        type: "success",
      });
         isLoading.value = false
       
        } catch (err) {
         isLoading.value = false
         notify({
        title: "Error",
        text: 'Something went wrong! Try again',
        type: "error",
      });
        }
      };
      onMounted(() => {
    fetchData();
}); 
</script>

<template>
<div>
  <notifications position="top right" width="350px" />
  <CourseFeeds :courses="courses" :isLoading="isLoading" />
</div>
</template>

<style scoped>
</style>
