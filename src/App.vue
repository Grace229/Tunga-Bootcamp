<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<template>
<div>
  <notifications position="top right" width="350px" />
  <navbar />
  <router-view></router-view>
  <Footer />
</div>
</template>

<style scoped>
</style>
