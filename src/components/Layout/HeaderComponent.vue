
<template>
    <MDBNavbar expand="lg" light bg="light" class="container">
      <!-- Toggle button -->
      <MDBNavbarToggler
        target="#navbarCenterAlignExample"
        @click="collapse6 = !collapse6"
      ></MDBNavbarToggler>
      <!-- Collapsible wrapper -->
      <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
        <MDBNavbarNav center class="mb-2 mb-lg-0">
          <!-- Center links -->
          <MDBNavbarItem href="/">
            Home
          </MDBNavbarItem>
          <!-- <MDBNavbarItem href="/link">
            Link
          </MDBNavbarItem> -->
          <!-- Navbar dropdown -->
          
          <!-- Center links -->
        </MDBNavbarNav>
        <MDBNavbarItem href="/itemsincart" class="me-3 me-lg-0  d-flex flex-row" style="padding-right: 50px;">
            <span>{{ cartQuantity }}</span>
        <img
          src="@/assets/cart.png"
          class="rounded-circle"
          height="35"
          alt=""
          loading="lazy"
        />
      </MDBNavbarItem>
      </MDBCollapse>
      <!-- Collapsible wrapper -->
    </MDBNavbar>
  </template>

  
<script>
  import { MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBCollapse  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
     
    },
    props: {
        cartQuantity: String,
    },
    setup() {
      const collapse1 = ref(false);
      return { collapse1 };
    }
  };
</script>