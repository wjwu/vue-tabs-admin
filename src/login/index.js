import Vue from 'vue';
import ElementUI from 'element-ui';
import '../common/css/reset.css';
import '../common/css/common.scss';

import Login from './Login';

Vue.use(ElementUI);

const app = new Vue({
  el: '#app',
  render: h => h(Login)
});

Vue.use({ app });
