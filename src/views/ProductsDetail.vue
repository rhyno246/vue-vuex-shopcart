<template>
    <div class="group">
        <loadding v-if="getLoading"></loadding>
        <v-card class="pt-4 pl-4 pr-4 pb-4" v-else>
            <v-row  class="align-start">
                <v-col cols="12" sm="6" md="6">
                    <div class="img">
                        <img :src="getProductDetail.image" alt="">
                    </div>
                </v-col>
                <v-col>
                    <div class="right-detail pl-3">
                        <h1 class="heading">{{ getProductDetail.title }}</h1>
                        <p class="category">{{ getProductDetail.category }}</p>
                        <p class="price">Price : <span>${{ getProductDetail.price }}</span></p>
                        <!-- <v-btn color="secondary" @click="Addtocart">
                            Add to cart
                        </v-btn> -->
                        <base-button></base-button>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <tab-description></tab-description>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import BaseButton from '../components/Base-button.vue'
import Loadding from '../components/Loadding.vue'
import tabDescription from '../components/tabDescription.vue'
export default {
    components: { tabDescription, BaseButton ,Loadding },
    props : ['id'],
    provide(){
        return{
            id : this.id
        }
    },
    data(){
        return {
        }
    },
    mounted(){
        return this.$store.dispatch('prod/getProductDetail' , this.id)
    },
    computed : {
        getProductDetail(){
            return this.$store.getters['prod/getDetailProduct']
        },
        getLoading(){
            return this.$store.getters['prod/loadding']
        },
    },
    // methods : {
    //     Addtocart(){
    //         this.$store.dispatch('cart/Addtocart' , {
    //             id : this.id
    //         })
    //     }
    // }
}
</script>

<style lang="scss">
    .img{
        text-align: center;
        img{
            width: 100%;
            max-width: 400px;
        }
    }
    .category{
        font-size: 25px;
    }
    .price{
        font-size: 20px;
        span{
            color: red;
            font-weight: bold;
        }
    }
</style>