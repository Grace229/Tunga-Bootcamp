<script setup>
import {ref, onMounted} from 'vue'
import customInstance from '../axios_client';
import BootcampDetails from '../components/CourseDetails.vue';
import { useNotification } from "@kyvg/vue3-notification";
import { useRoute } from 'vue-router';
const route = useRoute()
const { notify } = useNotification()
const bootcampDetails = ref({})
const isLoading = ref(false)
const fetchDetails = async () => {
        try {
          isLoading.value = true
          const response = await customInstance.get(`/api/v1/courses/${route.params.id}`);
          console.log(response.data.data)
          bootcampDetails.value = response.data.data;
          isLoading.value = false
          notify({
        title: "Success",
        text: 'Successful',
        type: "success",
      });
        
        } catch (err) {
          isLoading.value = false
            notify({
        title: "Error",
        text: 'Something went wrong, please try again',
        type: "error",
      });
        }
      };
 
 onMounted(() => {
fetchDetails()
 })
</script>
<template>
    <div>
        <BootcampDetails :course="bootcampDetails" :isLoading="isLoading" />
    </div>
</template>
<script setup>
</script>