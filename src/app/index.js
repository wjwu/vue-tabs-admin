import '../common/css/reset.css';
import '../common/css/common.css';
import './assets/css/app.scss';
import './assets/css/custom-dialog.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './modules/route';
import store from './store';
// element UI
import ElementUI from 'element-ui';
import AuthPlugin from '../common/js/auth-plugin';
import EventPlugin from '../common/js/event-plugin';
import '../common/css/theme-chalk/src/index.scss';
// axios
import './utils/axios';

// filters
import './filters';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(EventPlugin, window.parent);
Vue.use(AuthPlugin);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

Vue.use({ app });
