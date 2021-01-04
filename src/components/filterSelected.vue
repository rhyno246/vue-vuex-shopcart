<template>
    <div>
        <v-select
            :items="select"
            label="Solo field"
            dense
            solo
            @change="changeSelect"
          >
        </v-select>
    </div>
</template>
<script>
export default {
  data(){
    return{
      select : ['Desc', 'Asce', 'Name'],
    }
  },
  methods : {
    changeSelect(select){
      return this.$store.dispatch('prod/sortData' , select)
    }
  }
}
</script>