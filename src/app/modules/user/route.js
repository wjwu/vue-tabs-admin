import Detail from './Detail';
import List from './List';
import User from './User';

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
