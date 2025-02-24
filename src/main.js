import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// 라우터 사용
app.use(router);

app.mount('#app');
