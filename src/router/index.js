import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/MainView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 수정된 부분
  routes,
});

export default router;
