// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // Define your routes here
  {
    path: '/',
    component: () => import('./components/Product/Product.vue'), // Example: Create a Home component
  },
  {
    path: '/itemsincart',
    component: () => import('./components/Product/CartComponent.vue'), // Example: Create a Home component
    // Example: Create an About component
  },
];

const router = new VueRouter({
  routes,
});

export default router;
