import Vue from 'vue';
import ElementUI from 'element-ui';
import '../common/css/reset.css';
import '../common/css/theme-chalk/src/index.scss';

import Login from './Login.vue';

Vue.use(ElementUI);

const app = new Vue({
  el: '#app',
  render: h => h(Login)
});

Vue.use({ app });
