<!-- <template>
    DEtaill {{ $route.params.id }}
</template> -->

<template>
  <div class="container">
    <MDBCard class="mb-3">
      <MDBCardImg top :src="ProductDetailData.image" alt="..." style="
          width: 18rem;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;
        " />
      <MDBCardBody>
        <MDBCardTitle>{{ ProductDetailData.title }}</MDBCardTitle>
        <MDBCardText>
          {{ ProductDetailData.description }}
        </MDBCardText>
        <MDBCardText>
          <small class="text-muted">{{ ProductDetailData.price }} Rs.</small>
        </MDBCardText>
        <MDBCardButton v-if="ProductDetailData.is_incart < 0" class="btn btn-primary"
          @click.once="addtoCart(ProductDetailData.id)">Add To Cart</MDBCardButton>
        <MDBCardButton v-else-if="ProductDetailData.is_incart >= 0" class="btn btn-danger"
          @click.once="removeFromCart(ProductDetailData.id)">Remove From Cart</MDBCardButton>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>
<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
} from "mdb-vue-ui-kit";
export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
  },
  data() {
    return {
      ProductDetailData: [],
      CartProducts: JSON.parse(localStorage.getItem("cartproducts")) || [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://fakestoreapi.com/products/" + this.$route.params.id, {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          data.is_incart = this.CartProducts.indexOf(
            parseInt(this.$route.params.id)
          );

          this.ProductDetailData = data;
          // this.ProductDetailData.push('such');
          // console.log(this.ProductDetailData)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    removeFromCart(pId) {
      const newArray = this.CartProducts.filter((item) => item !== pId);
      this.CartProducts = newArray;
      this.isdisabled = 0;
      localStorage.setItem("cartproducts", JSON.stringify(this.CartProducts));
      this.$emit("decrement", this.CartProducts); // Emit the 'increment' event to notify the parent.
      this.fetchData();
    },
    addtoCart(pId) {
      this.isdisabled = 1;
      this.CartProducts.push(pId);
      localStorage.setItem("cartproducts", JSON.stringify(this.CartProducts));
      this.$emit("increment", this.CartProducts); // Emit the 'increment' event to notify the parent
      this.fetchData();
    },
  },
};
</script>
