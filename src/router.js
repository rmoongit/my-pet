import {createRouter, createWebHistory} from 'vue-router';

import Timer from './Timer/Timer.vue';
import Ecommerce from './Ecommerce/Ecommerce.vue';

// создаём массив маршрутов и их компонентов
const routes = [
  {path: '/Timer', component: Timer},
  {path: '/Ecommerce', component: Ecommerce},
];

//создаём маршрутизатор с историей наших маршрутов
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
