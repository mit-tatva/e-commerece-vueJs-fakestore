<template>
  <HeaderComponent :cartQuantity="cartQuantity" />
  <Product @increment="CartCount" @decrement="CartCount" />
  <!-- <router-view></router-view> -->

  <FooterComponent />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/Layout/HeaderComponent.vue'
import FooterComponent from './components/Layout/FooterComponent.vue'
import Product from './components/Product/Product.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderComponent,
    FooterComponent,
    Product,
  },
  data() {
    return {
      cartQuantity: 0,
    };
  },
  mounted() {
        this.CartCount(JSON.parse(localStorage.getItem('cartproducts')) || []);
    },
  methods: {
    CartCount(pIds) {
      if (pIds) {
        this.cartQuantity = pIds.length;
        
      }else{
        this.cartQuantity = 0;
        // return this.cartQuantity;
      }
    },
    incrementCount( pIds) {
      this.cartQuantity = pIds.length;
      // alert(this.cartQuantity + " Cart Count " );
    },
    decreaseCount(pIds){
      // this.cartQuantity = this.cartQuantity - 1;
      this.cartQuantity = pIds.length;

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
