import Vue from 'vue';
import VueRouter from 'vue-router';

import session from '../../common/js/session';
import home from './home/route';
import others from './others/route';
import user from './user/route';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      redirect: '/home'
    },
    home,
    others,
    user
  ]
});

router.beforeEach((to, from, next) => {
  if (!session.getString('token') && process.env.NODE_ENV !== 'development') {
    next(false);
    window.parent.location.href = './login.html';
  } else {
    next();
  }
});

export default router;
