import {createRouter, createWebHistory} from 'vue-router';

import Tomadoro from './Tomadoro/Tomadoro.vue';

// создаём массив маршрутов и их компонентов
const routes = [{path: '/tomadoro', component: Tomadoro}];

//создаём маршрутизатор с историей наших маршрутов
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
