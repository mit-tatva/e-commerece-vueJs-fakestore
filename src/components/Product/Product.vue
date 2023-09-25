<template>
    <router-view></router-view>
    <!-- <ProductListing :ProductListingData="ProductListingData"/> -->
    <!-- <ProductListing :ProductListingData="ProductListingData" @increment="incrementCount" /> -->
</template>
<script>
// import ProductListing from './ProductListing.vue'
export default {
    name: 'App',
    components: {
        // ProductListing,

    },
    data() {
        return {
            // ProductListingData: null,
            cart: 0,
        };
    },

    mounted() {
        // this.fetchData();
        // alert("hi");
    },
    methods: {
        // fetchData() {
        //     fetch('https://fakestoreapi.com/products', {
        //         method: "GET",
        //     }).then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //         .then(data => {
        //             this.ProductListingData = data;
        //             // console.log( data)
        //         })
        //         .catch(error => {
        //             console.error('Error fetching data:', error);
        //         });

        // },
        // CartCount() {
        //     if (this.cart == null) {
        //         this.cart = 0;
        //     }
        //     return this.cart;
        // },
        // incrementCount(pId){
        //     this.cart = this.cart + 1;
        //     this.$emit('increment_from_parent', pId); // Emit the 'increment' event to notify the parent

        // }
    },
}
</script>