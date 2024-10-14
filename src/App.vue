<script setup>
import{ ref, onMounted} from 'vue'
import BootcampFeeds from './components/BootcampFeeds.vue';
import customInstance from './axios_client.js'
const courses = ref([])
const fetchData = async () => {
        try {
          const response = await customInstance.get('/api/v1/courses');
          console.log(response.data)
         courses.value = response.data.data;
         
        } catch (err) {
            console.log(err)
          alert('Error fetching data');
        }
      };
      onMounted(() => {
    fetchData();
}); 
const coursesData = {
    "success": true,
    "count": 9,
    "pagination": {},
    "data": [
        {
            "_id": "5d725cfec4ded7bcb480eaa6",
            "title": "Software QA",
            "description": "This course will teach you everything you need to know about quality assurance",
            "weeks": "6",
            "tuition": 5000,
            "minimumSkill": "intermediate",
            "scholarshipAvailable": false,
            "bootcamp": {
                "_id": "5d725a1b7b292f5f8ceff788",
                "name": "Devcentral Bootcamp",
                "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development"
            }
        },
        {
            "_id": "5d725cfec4ded7bcb480eaa7",
            "title": "IOS Development",
            "description": "Get started building mobile applications for IOS using Swift and other tools",
            "weeks": "8",
            "tuition": 6000,
            "minimumSkill": "intermediate",
            "scholarshipAvailable": false,
            "bootcamp": {
                "_id": "5d725a1b7b292f5f8ceff788",
                "name": "Devcentral Bootcamp",
                "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development"
            }
        },
        // Add more courses as needed
    ]
};
</script>

<template>
<div>
  <BootcampFeeds :courses="courses" />
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
