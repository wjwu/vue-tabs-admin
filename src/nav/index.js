import Vue from 'vue';
import ElementUI from 'element-ui';
import EventPlugin from '../common/js/event-plugin';
import '../common/css/reset.css';
import '../common/css/common.scss';
import '../app/assets/css/dialog.scss';

import Nav from './Nav';

Vue.use(ElementUI);
Vue.use(EventPlugin, window);

const app = new Vue({
  el: '#app',
  render: h => h(Nav)
});

Vue.use({
  app
});
