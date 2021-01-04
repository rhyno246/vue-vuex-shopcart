<template>

    <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-4" height="100%">
            <div class="pl-3 pt-3 pb-3 pr-3">
                <div class="img-product">
                    <div class="img">
                        <img :src="image" :alt="title">
                    </div>
                    <div class="name"><router-link :to="`/products/${id}`">{{ title }}</router-link></div>
                    
                    <div class="catefory">{{ category }}</div>
                    <div class="price">${{ price }}</div>
                    <base-button></base-button>
                </div>
            </div>
        </v-card>
    </v-col>
</template>
<script>
import BaseButton from './Base-button.vue'
export default {
  components: { BaseButton },
    props : ['id','title','price' , 'image', 'category'],
    data (){
      return{
        loading: true,
        firstLoad: true,
      }
    },
    provide(){
      return {
        id : this.id
      }
    }
}
</script>
<style lang="scss">
.img-product{
    .img{
        height: 190px;
        overflow: hidden;
        text-align: center;
        img{
            max-width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }
}

.name{
    margin-top: 10px;
    a{
        text-decoration: none;
    }
}

.price{
    color: red;
}

  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>