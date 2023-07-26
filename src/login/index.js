import '../common/css/reset.css';
import '../common/css/common.scss';
import 'element-plus/dist/index.css';

import ElementPlus from 'element-plus';
import { createApp } from 'vue';

import App from './App';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
