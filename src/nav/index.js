import Vue from 'vue';
import ElementUI from 'element-ui';
import AuthPlugin from '../common/js/auth-plugin';
import EventPlugin from '../common/js/event-plugin';
import '../common/css/reset.css';
import '../common/css/common.css';
import '../common/css/theme-chalk/src/index.scss';
import './assets/css/iconfont.css';
import '../app/assets/css/custom-dialog.scss';

import Nav from './Nav.vue';

Vue.use(ElementUI);
Vue.use(EventPlugin, window);
Vue.use(AuthPlugin);

const app = new Vue({
  el: '#app',
  render: h => h(Nav)
});

Vue.use({
  app
});
