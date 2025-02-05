import { createRouter, createWebHashHistory  } from 'vue-router'
import login from '../components/login.vue';
import reportList from '../components/reportList.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: login },
  { path: '/reportList', name: 'reportList', component: reportList },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
