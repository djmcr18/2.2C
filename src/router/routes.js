import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import FoopyFeed from '../components/FoopyFeed.vue';
import Forums from '../components/Forums.vue';
import Store from '../components/Store.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/FoopyFeed', component: FoopyFeed },
  { path: '/forums', component: Forums },
  { path: '/store', component: Store },
  { path: '/cart', component: ShoppingCart },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
