import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Product from './components/Product/ProductListing.vue'
import DetailPage from './components/Product/ProductDetail.vue'

// import router from './router';
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name:'home',
        path: '/',
        
        component: () => Product, // Example: Create a Home component
      },
      {
        name:'itemsincart',
        path: '/itemsincart',
        
        component: () => import('./components/Product/CartComponent.vue'), // Example: Create a Home component
        // Example: Create an About component
        
      },
      { 
        name:'detail',
        path: '/detail/:id', 
        component: DetailPage, 
        props: true
     },

    ],
    beforeRouteLeave(to, from) {
        console.log('Navigating from', from, 'to', to);
    
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (!answer) return false
    }
  });
  
app.use(router);
app.mount('#app');
