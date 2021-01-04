<template>
    <div class="tab">
        <template slot:extension>
            <v-tabs
                v-model="tab"
                align-with-title
            >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                v-for="item in items"
                :key="item"
            >
                {{ item }}
            </v-tab>
            </v-tabs>
        </template>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <v-card flat>
                    <v-card-text class="text-tab">{{ getProductDetail.description }}</v-card-text>
                </v-card>
            </v-tab-item>
             <v-tab-item>
                <v-card-text>
                    <form-data></form-data>
                </v-card-text>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import FormData from './FormData.vue'
export default {
  components: { FormData },
    data (){
        return {
            tab : null,
            items : ['Description' , 'Comment'],
        }
    },
    computed : {
        getProductDetail(){
            return this.$store.getters['prod/getDetailProduct']
        }
    },
}
</script>

<style lang="scss">
.v-tab{
    margin-left: 0 !important;
}
.tab {
    width: 100%;
}
.text-tab{
    font-size: 20px !important;
    line-height: 30px !important;
}
.form{
    width: 100%;
}
</style>