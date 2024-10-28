<script setup>
import Hero from '../components/Hero.vue';

</script>

<template>
<div>
<Hero />
        <div class="container mx-auto py-12" id="courses">
            <h2 class="text-3xl font-semibold text-center mb-8">Our Popular Courses</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold text-blue-600 mb-4">Web Development</h3>
                    <p class="text-gray-700">Learn how to build web applications using the latest technologies.</p>
                    <a href="#" class="text-blue-500 mt-4 block hover:underline">Learn More</a>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold text-blue-600 mb-4">Data Science</h3>
                    <p class="text-gray-700">Master data science skills including Python, machine learning, and
                        more.</p>
                    <a href="#" class="text-blue-500 mt-4 block hover:underline">Learn More</a>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold text-blue-600 mb-4">UI/UX Design</h3>
                    <p class="text-gray-700">Learn to create user-friendly and aesthetically pleasing
                        interfaces.</p>
                    <a href="#" class="text-blue-500 mt-4 block hover:underline">Learn More</a>
                </div>
            </div>
        </div>
</div>
</template>

<style scoped>
</style>
