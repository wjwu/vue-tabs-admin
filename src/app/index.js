// import '../common/css/reset.css';
import './assets/css/dialog.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './modules/route';
import store from './store';
// element UI
import ElementUI from 'element-ui';
import EventPlugin from '../common/js/event-plugin';
// axios
import './utils/axios';
// filters
import './filters';

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
