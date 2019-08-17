import User from './User';
import List from './List';
import Detail from './Detail';

export default {
  path: '/user',
  redirect: '/404',
  component: User,
  children: [{
    path: 'list',
    component: List
  }, {
    path: 'detail/:id',
    component: Detail
  }]
};
