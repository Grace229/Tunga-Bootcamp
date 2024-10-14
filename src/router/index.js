import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BootcampDetails from '../views/BootcampDetailsView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/bootcamp-details/:id',
    name: 'Bootcamp Details',
    component: BootcampDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
