import '@/assets/css/reset.css';
import '@/assets/css/common.scss';
import 'element-plus/dist/index.css';

import ElementPlus from 'element-plus';
import { createApp } from 'vue';

import router from '@/router';

import App from './App';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
