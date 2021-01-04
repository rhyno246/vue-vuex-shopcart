<template>
    <v-btn
        class="ma-2"
        :loading="loading"
        color="info"
        @click="Addtocart"
    >
        Add to cart
        <template v-slot:loader>
            <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
            </span>
        </template>
    </v-btn>
</template>
<script>
export default {
    inject : ['id'],
    data(){
        return {
          loading: false,
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
    },
    methods : {
       Addtocart(){
        this.loading = true
        setTimeout(() => {
          this.$store.dispatch('cart/Addtocart' , {
            id : this.id
          })
          this.loading = false
        }, 500);
      }
    }
}
</script>