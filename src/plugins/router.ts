import { createRouter, createWebHistory } from 'vue-router';

import Blank from '@/layouts/Blank';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/HelloWorld'),
      meta: {
        layout: Blank,
      },
    },
  ],
});
