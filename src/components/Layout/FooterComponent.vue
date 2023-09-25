<template>
    <MDBFooter :text="['center', 'lg-start']" class="container">
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
      <!-- Copyright -->
    </MDBFooter>
  </template>
  <script>
  import { MDBFooter, } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBFooter,
    },
  };
</script>