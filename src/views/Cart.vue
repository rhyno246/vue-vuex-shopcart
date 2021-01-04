<template>
    <div class="cart">
        <title-blog title="Cart"></title-blog>
        <div class="none-cart" v-if="hasCart">Opps !! Cart Empty </div>
        <div v-else>
            <h3 class="pt-6 pb-6 text-center">Amount Toal : ${{ AmountTotal }}</h3>
            <cart-item v-for="items in getAllCart"
                :key="items.index"
                :id="items.id"
                :title="items.title"
                :price="items.price"
                :quantity="items.quantity"
                :image="items.image"
                :catefory="items.catefory"
            >
            </cart-item>
        </div>
    </div>
</template>

<script>
import CartItem from '../components/cartItem.vue'
import TitleBlog from '../components/TitleBlog.vue'
export default {
    components: { TitleBlog, CartItem },
    computed : {
        getAllCart(){
            return this.$store.getters['cart/getCart'];
        },
        hasCart(){
            return this.$store.getters['cart/hasCart'];
        },
        AmountTotal(){
            return this.$store.getters['cart/AmountTotal']
        }
    }
}
</script>

<style lang="scss">
    .none-cart{
        font-size: 25px;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
    }
</style>