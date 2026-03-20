import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/Default';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Welcome'),
      meta: {
        layout: DefaultLayout
      }
    }
  ]
});

export default router;
