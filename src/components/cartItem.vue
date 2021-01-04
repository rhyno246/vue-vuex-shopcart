<template>
    <v-card class="pl-2 pr-2 mb-12">
        <v-row>
            <v-col cols="12" sm="2" md="2">
                <img :src="image" :alt="title" class="img">
            </v-col>
            <v-col cols="12" sm="10" md="10">
                <h3 class="text heading-cart">{{ title }}</h3>
                <div class="text price"><strong>price</strong> : <span>$ {{ price }}</span></div>
                <div class="group-btn">
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        x-small
                        color="error"
                        @click="dashCart"
                        :disabled="disableButton"
                    >
                        <v-icon dark>
                            mdi-minus
                        </v-icon>
                    </v-btn>
                    <span class="quantity-input">{{ quantity }}</span>
                    <v-btn
                        class="mx-2"
                        fab
                        plus
                        x-small
                        color="primary"
                        @click="plusCart"
                    >
                        <v-icon plus>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </div>
                <div class="text quantity"><strong>Total</strong> : ${{toTalProduct}}</div>
                <div class="text quantity"><strong>Quantity</strong> : {{ quantity }}</div>
                <div class="text cate"><strong>{{ catefory }}</strong></div>
                <v-btn
                    class="mx-2 close-carl"
                    fab
                    close
                    x-small
                    color="primary"
                    @click="removeProductToCart"
                >
                    <v-icon plus>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props : ['id','title','price','quantity','image','catefory'],
    computed : {
        toTalProduct(){
            return (this.quantity * this.price).toFixed(2);
        },
        disableButton(){
            return this.quantity <= 1
        }
    },
    methods : {
        removeProductToCart(){
            return this.$store.dispatch('cart/removeProductToCart', {
                id : this.id
            })
        },
        plusCart(){
            return this.$store.dispatch('cart/plusCart' , {
                id : this.id
            })
        },
        dashCart(){
            return this.$store.dispatch('cart/dashCart', {
                id : this.id
            })
        }
    }
}
</script>


<style lang="scss">
.group-btn{
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.theme--dark.v-btn.v-btn--disabled {
    background: #ddd;
    color: #333;
}
    .img{
        max-width: 100%;
    }
    .text{
        font-size: 18px;
        margin-bottom: 8px;
        span{
            color: red;
        }
    }
    .heading-cart{
        text-transform: uppercase;
    }
    .quantity-input{
        height: 30px;
        width: 70px;
        display: block;
        border: 1px solid #3333;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .close-carl {
        top: 10px;
        position: absolute;
        right: 0px;
    }
</style>