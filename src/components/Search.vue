<template>
    <form action="" class="form" @submit.prevent="submitSearch">
        <input type="text" placeholder="search......" class="inputmy" v-model="search">
        <div class="btn-search">
            <v-btn color="warning" fab x-small>
                <v-icon>mdi-search-web</v-icon>
            </v-btn>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            search : ''
        }
    },
    methods : {
        submitSearch(){
            const strSearch = this.search;
            const path = '/search';
            this.$router.push(`${path}?type=` + strSearch);
            if(this.search == ""){
                this.$router.replace('/search');
            }
            this.search = "";
            return this.$store.dispatch('prod/search' , strSearch);
        },
        
    }
}
</script>
