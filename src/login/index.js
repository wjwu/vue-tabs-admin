import Vue from 'vue';
import ElementUI from 'element-ui';
import '../common/css/reset.css';

import Login from './Login.vue';
console.log(process.env);
Vue.use(ElementUI);

const app = new Vue({
  el: '#app',
  render: h => h(Login)
});

Vue.use({ app });
