
import { onMounted } from 'vue';
<template>
    <div class="container">
        <MDBTable class="align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <!-- <th> <input type="text" v-model="fName" required>
</th>
<th>{{ fName }}</th> this is for 2 way data binding-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in ApiCartData" :key="key">
                    <td>
                        <a class="d-flex align-items-center" @click="openDetailPage(value.id)">
                            <img :src="value.image" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">{{ value['title'] }}</p>
                            </div>
                        </a>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">{{ value['price'] }} Rs. </p>
                    </td>
                    <td>
                        <MDBBtn color="link" size="sm" rounded @click.once="removeFromCart(value.id)">
                            Remove
                        </MDBBtn>
                    </td>
                </tr>
                <tr>
                    <td>Total Amount</td>
                    <td>{{ calcSum }} Rs</td>
                </tr>
            </tbody>
        </MDBTable>
    </div>
</template>
<script>
import { MDBTable, MDBBtn } from "mdb-vue-ui-kit";
export default {

    components: {
        MDBTable,
        MDBBtn,
    },

    data() {
        return {
            CartItems: JSON.parse(localStorage.getItem('cartproducts')) || [],
            ApiCartData: [],
            // fName: "",
        };
    },

    computed: {
        calcSum() {
            let total = 0;
            this.ApiCartData.forEach((item) => {
                // total += item.price * item.qty;
                total += item.price;
            });
            // console.log(this.ApiCartData);
            return Math.round(total * 100) / 100;
        },

    },
    created() {
        this.fetchData();

    },

    methods: {

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
                    const resultArray = this.CartItems.map(id => {
                        const item = data.find(item => item.id === id);
                        return item ? { ...item } : null;
                    });
                    this.ApiCartData = resultArray;

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        },
        removeFromCart(pId) {
            const newArray = this.CartItems.filter(item => item !== pId);
            this.CartItems = newArray;
            this.isdisabled = 0;
            localStorage.setItem('cartproducts', JSON.stringify(this.CartItems));
            this.$emit('decrement', this.CartItems); // Emit the 'increment' event to notify the parent.
            this.fetchData();
        },
        openDetailPage(id) {
            this.$router.push({ name: 'detail', params: { id } });
        },

    }
};
</script>