import {createRouter, createWebHistory} from 'vue-router';

import Timer from './Timer/Timer.vue';

// создаём массив маршрутов и их компонентов
const routes = [{path: '/timer', component: Timer}];

//создаём маршрутизатор с историей наших маршрутов
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
