<template>
    <div class="search">
      <title-blog title="Search"></title-blog>

      <h1 class="text-center mb-9" v-if="!hasSearch">Opps !! Search Not Found</h1> 
      
      <v-row v-else>
        <search-item
          v-for="search in getSearch"
          :key="search.id"
          :id="search.id"
          :image="search.image"
          :title="search.title"
          :category="search.category"
          :price="search.price"
        >
        </search-item>
      </v-row>
    </div>
</template>

<script>
import SearchItem from '../components/searchItem.vue'
import TitleBlog from '../components/TitleBlog.vue'
export default {
  components: { TitleBlog, SearchItem },
  computed : {
    getSearch(){
      return this.$store.getters['prod/getSearch']
    },
    hasSearch(){
      return this.$store.getters['prod/hasSearch']
    }
  }
}
</script>