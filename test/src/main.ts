import { createApp } from 'vue';
import WoonUI from '../../src';
import App from './App.vue';

const app = createApp(App);
app.use(WoonUI);
app.mount('#app');
