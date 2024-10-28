<template>
            <nav class="bg-blue-600 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-white text-2xl font-bold">
                    Tech Bootcamp
                </div>
                <ul class="flex space-x-4">
                    <li>
                    <router-link to="/" class="text-white hover:text-gray-200"  active-class="text-white font-bold"
                    exact>
                        Home
                    </router-link>
                    </li>
                    <li>
                    <router-link to="/courses" class="text-white hover:text-gray-200"  active-class="text-white font-bold">
                       Courses
                    </router-link>
                    </li>
                    <li>
                    <router-link to="/bootcamps" class="text-white hover:text-gray-200"  active-class="text-white font-bold">
                        Bootcamps
                    </router-link>
                    </li>
                    <li>
                    <router-link to="/contact" class="text-white hover:text-gray-200"  active-class="text-white font-bold">
                       Contact
                    </router-link>
                    </li>
                </ul>
            </div>
        </nav>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  /* Add custom styling if needed */
  </style>
  