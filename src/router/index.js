import { createRouter, createWebHistory } from 'vue-router'


import EditList from "@/views/EditList.vue";
import Checklist from "@/views/Checklist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Checklist
    },
    {
      path: '/editList',
      component: EditList
    },
  ]
})

export default router
