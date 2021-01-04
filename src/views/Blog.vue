<template>
  <div class="Blog">
    <title-blog title="Blog"></title-blog>
    <loadding v-if="getloadding"></loadding>
    <div class="group" v-else>
      <v-row>
        <blog-item
            v-for="blog in visiblePages"
            :key="blog.id"
            :id="blog.id"
            :image="blog.urlToImage"
            :title="blog.title"
          >
        </blog-item>
      </v-row>

      <div class="pagination mt-9 mb-7">
        <v-pagination
            v-model="page"
            :length="totalPage"
            :total-visible="8"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            circle
          >
        </v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from '../components/BlogItem.vue'
import Loadding from '../components/Loadding.vue'
import TitleBlog from '../components/TitleBlog.vue'


export default {
  components: { TitleBlog, BlogItem , Loadding },
  data(){
    return{
      page: 1,
      perPage: 10,
    }
  },
  computed : {
    getAllBlog(){
      return this.$store.getters['blog/getAllblog']
    },
    getloadding(){
      return this.$store.getters['blog/loadding']
    },
    totalPage(){
      return Math.ceil(this.getAllBlog.length/this.perPage)
    },
    visiblePages () {
      return this.getAllBlog.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    },
  },
  mounted(){
    return this.$store.dispatch('blog/getAllblog');
  }
}
</script>

<style lang="scss">

</style>
