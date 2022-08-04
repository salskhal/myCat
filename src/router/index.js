import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savePosition) {
    return {
      top: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/breed/:id",
      name: "CatDetails",
      component: () => import('../views/CatDetails.vue'),
      props: true
    },
    {
      path: "/breed",
      name: "BreedList",
      component: () => import("../views/BreedList.vue")
    }
  ]
})

export default router
