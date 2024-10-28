import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursePageView.vue'
import BootcampsView from '../views/BootcampPageView.vue'
import BootcampDetails from '../views/BootcampDetailsView.vue'
import ViewCourseDetailsView from '../views/ViewCourseDetailsView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/courses',
    name: 'Course',
    component: CoursesView
  },
  {
    path: '/bootcamps',
    name: 'Bootcamp',
    component:BootcampsView
  },
  {
    path: '/course-details/:id',
    name: 'Course Details',
    component: ViewCourseDetailsView
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
