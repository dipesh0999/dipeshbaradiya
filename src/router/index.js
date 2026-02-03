import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/homepage.vue'
import AboutPage from '../views/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'homepage',
      component: Homepage,
      path: '/',
    },
    {
      name: 'about',
      component: AboutPage,
      path: '/about',
    },
  ],
})

export default router
