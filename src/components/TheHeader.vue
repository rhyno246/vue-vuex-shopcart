<template>
    <header>
        <ul class="main-header d-flex align-center">
            <li><router-link to="/products"><img src="../assets/logo.png" alt=""></router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li class="search">
                <search></search>
            </li>
            <li class="cart">
                <router-link to="/cart">
                    <v-badge
                        :content="cartQuantity"
                        color="error"
                        overlap
                        :value="cartQuantity"
                    >
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script>
import Search from './Search.vue'
export default {
  components: { Search },
    data(){
        return{
            show: false,
        }
    },
    computed : {
        cartQuantity(){
            return this.$store.getters['cart/quantity']
        }
    },
}
</script>
<style lang="scss">
.main-header {
    padding: 0 !important;
  li{
      a {
    font-weight: bold;
    color: #fff;
    display: block;
    text-decoration: none;
    &.router-link-exact-active {
      color: #fdb45e;

    }
  }
  }
}

.cart{
    cursor: pointer;
}
    .main-header{
        list-style: none;
        padding-left: 0;
    }
    .main-header li {
        margin-right: 3rem;
    }

    .inputmy{
        height: 32px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 30px;
        width: 300px;
        padding: 20px 22px;
    }
    .search{
        margin-left: auto;
        margin-right: 25px !important;
    }
    .form{
        position: relative;
    }
    .btn-search{
        position: absolute;
        top: 4px;
        right: 4px;
        margin: 0 !important;
    }
</style>