<template>
    <div class="flex justify-center mb-6">
        <input
          v-model="searchValue"
          type="text"
          placeholder="Search for a course"
          class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
</template>
<script setup>
import {ref, watch} from 'vue'
const emit = defineEmits(['filterBootcamps'])
const searchValue = ref('')
watch(searchValue,(newValue) =>{
    emit("filterBootcamps", newValue);

})
</script>