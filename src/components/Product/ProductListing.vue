<template>
    <div class="container">
        <div class="row" style="padding-left:100px">

            <MDBCard style="width: 18rem; margin-top: 25px; margin-bottom: 25px" v-for="(value, key) in ProductListingData"
                :key="key">
                <MDBCardImg :src="value.image" alt="..." />
                <MDBCardBody @click="openDetailPage(value.id)">
                    <MDBCardLink>{{ stringtouppercase(value.category) }}</MDBCardLink>
                    <MDBCardTitle>{{ value.title }}</MDBCardTitle>
                    <MDBCardText>
                        {{ value.description }}.
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardBody>
                    <MDBCardLink>{{ value.price }} Rs.</MDBCardLink>
                    <MDBCardButton v-if=" !CartProducts.includes(value.id)" class="btn btn-primary" @click.once="addtoCart(value.id)"  >Add To Cart</MDBCardButton>
                    <MDBCardButton v-else-if="CartProducts.includes(value.id)" class="btn btn-danger" @click.once="removeFromCart(value.id)">Remove From Cart</MDBCardButton>
                </MDBCardBody>
            </MDBCard>

        </div>
    </div>
</template>
<script>
import fetch from 'cross-fetch';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBCardImg,
    MDBCardButton,
} from "mdb-vue-ui-kit";

export default {
    // props: {
        // ProductListingData: Array,
    // },
    components: {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardLink,
        MDBCardImg,
        MDBCardButton,
    },
    data(){
        return {
            ProductListingData: null,
            isdisabled : 0,
            CartProducts : [],

        };
    },
    created() {
        this.fetchData();
        this.CartProducts = JSON.parse(localStorage.getItem('cartproducts')) || [];
    },
    mounted() {
        // this.fetchData();
        // this.CartProducts = JSON.parse(localStorage.getItem('cartproducts')) || [];
    },
    methods: {
        stringtouppercase(name) {
            const capitalizedFirst = name[0].toUpperCase();
            const rest = name.slice(1);
            return capitalizedFirst + rest;
        },
        addtoCart(pId){
          this.isdisabled =1;
          this.CartProducts.push(pId);
          localStorage.setItem('cartproducts', JSON.stringify(this.CartProducts));
          this.$emit('increment', this.CartProducts); // Emit the 'increment' event to notify the parent


        },
        removeFromCart(pId){
            const newArray = this.CartProducts.filter(item => item !== pId);
            this.CartProducts = newArray;
            this.isdisabled =0; 
            localStorage.setItem('cartproducts', JSON.stringify(this.CartProducts));
            this.$emit('decrement', this.CartProducts); // Emit the 'increment' event to notify the parent.

        },
        fetchData() {
            fetch('https://fakestoreapi.com/products', {
                method: "GET",
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
                .then(data => {
                    this.ProductListingData = data;
                    // console.log( data)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        },
        openDetailPage(id){
            this.$router.push({ name: 'detail', params: { id } });
        }
    },
};
</script>
