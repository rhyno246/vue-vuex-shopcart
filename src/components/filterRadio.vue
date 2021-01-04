<template>
    <div>
        <v-radio-group
            v-model="radios"
            mandatory
            @change="filterCategory"
        >   
            <v-radio
                label="All"
                value="all"
                color="warning"
            ></v-radio>
            <v-radio
                label="men clothing"
                value="men clothing"
                color="warning"
            ></v-radio>
            <v-radio
                label="jewelery"
                value="jewelery"
                color="warning"
            ></v-radio>
            <v-radio
                label="electronics"
                value="electronics"
                color="warning"
            ></v-radio>
            <v-radio
                label="women clothing"
                value="women clothing"
                color="warning"
            ></v-radio>
        </v-radio-group> 
    </div>
</template>
<script>
export default {
  data(){
    return{
        radios: null,
    }
  },
  methods : {
    filterCategory(){
        const filter = this.radios;
        return this.$store.dispatch('prod/filterCategory' , filter)
    }
  }
}
</script>