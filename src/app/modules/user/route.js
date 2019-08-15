import User from './User';
import List from './List';
import List1 from './List1';
import Detail from './Detail';

export default {
  path: '/user',
  redirect: '/404',
  component: User,
  children: [{
    path: 'list',
    component: List
  }, {
    path: 'list1',
    component: List1
  }, {
    path: 'detail/id',
    component: Detail
  }]
};
