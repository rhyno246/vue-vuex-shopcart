<template>
  <div class="products">
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <v-card class="pl-5 pt-5 pr-5 pb-5">
          <filter-selected></filter-selected>
          <filter-radio></filter-radio>
        </v-card>
        <v-card class="mt-5 card">
          <img src="../assets/shipping.jpg" alt="">
        </v-card>
      </v-col>

      <loadding v-if="getLoading"></loadding>
      <v-col cols="12" sm="8" md="8" v-else>
        <title-blog title="Product"></title-blog>
        <v-row>
            <item-product
              v-for="product in visiblePages"
              :key="product.id"
              :id="product.id"
              :title="product.title"
              :price="product.price"
              :image="product.image"
              :category="product.category"
            ></item-product>
        </v-row>
        <div class="text-center mt-7 mb-7">
          <v-pagination
            v-model="page"
            :length="Math.ceil(getProduct.length/perPage)"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            circle
            @input="ChangePage"
          ></v-pagination>
        </div>
        
      </v-col>
    </v-row>

  </div>
</template>

<script>
import FilterRadio from '../components/filterRadio.vue'
import filterSelected from '../components/filterSelected.vue'
import ItemProduct from '../components/ItemProduct.vue'
import Loadding from '../components/Loadding.vue'
import TitleBlog from '../components/TitleBlog.vue'
export default {
  components: { filterSelected, FilterRadio, ItemProduct, TitleBlog ,Loadding },
  data(){
    return{
      page: 1,
      perPage: 10,
    }
  },
  computed : {
    getProduct(){
      return this.$store.getters['prod/filterCategory'];
    },
    getLoading(){
        return this.$store.getters['prod/loadding']
      },
    visiblePages () {
      if (this.getProduct.length <= 10){
        return this.getProduct
      }
      return this.getProduct.slice((this.page - 1) * this.perPage, this.page* this.perPage)
    },
  },
  mounted(){
    return this.$store.dispatch('prod/getAllProduct');
  },
  methods : {
    ChangePage(val){
      const path = `/products?page=${val}`
      if (this.$route.path !== path) this.$router.push(path)
    },
  }
}
</script>
<style lang="scss">
.card{
  img{
    width: 100%;
  }
  .theme--light.v-pagination .v-pagination__item--active{
    outline: none;
  }
}
</style>
