import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/blog',
    name: 'BlogView',
    component: () => import('../views/BlogView.vue'),
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/women',
    name: 'WomenView',
    component: () => import('../views/WomenView.vue'),
  },
  {
    path: '/men',
    name: 'MenView',
    component: () => import('../views/MenView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
