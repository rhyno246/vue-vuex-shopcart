<template>
    <v-col cols="12" sm="6" md="3">
        <v-card class="elevation-4" height="100%">
            <v-img :src="image" />
            <div class="pl-3 pr-3">
            <h4 class="mt-3 mb-2 pb-3">{{ title }}</h4>
            </div>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props : ['id' , 'title', 'image'],  
}
</script>

<style lang="scss">

</style>