import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import InstructionsPage from './pages/InstructionsPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Ocean Grid Navigator',
    },
  },
  {
    path: '/instructions',
    component: InstructionsPage,
    meta: {
      title: 'Instructions',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
