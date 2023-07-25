import '../common/css/reset.css';
import '../common/css/common.scss';
import './assets/css/dialog.scss';
import './utils/axios';
import './filters';

import ElementUI from 'element-ui';
import Vue from 'vue';

import EventPlugin from '../common/js/event-plugin';
import App from './App.vue';
import router from './modules/route';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(EventPlugin, window.parent);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

Vue.use({ app });
