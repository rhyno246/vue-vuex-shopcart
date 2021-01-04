<template>
    <v-col cols="12" sm="6" md="3">
        <v-card>
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
    props : ['id' , 'title', 'image' , 'price' , 'category'],
    provide(){
        return{
            id : this.id
        }
    }
}
</script>