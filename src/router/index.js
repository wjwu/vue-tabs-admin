import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/home/Index';
import Login from '@/views/login/Index';
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
    },
  ],
});
