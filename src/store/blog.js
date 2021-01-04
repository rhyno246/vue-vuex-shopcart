import axios from "axios"

export default {
    namespaced : true,
    state(){
        return {
            blog : [],
            loadding : false
        }
    },
    mutations : {
        getAllblog(state , payload){
            return state.blog = payload
        }
    },
    actions : {
        async getAllblog({ commit , state }){
            state.loadding = true
            await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cbc4b988b4964eb49176d70eeebca312')
            .then(response => {
                commit('getAllblog' , response.data.articles)
                state.loadding = false
            }).catch(error => {
                console.log(error.message);
            });
        }
    },
    getters : {
        getAllblog(state){
            return state.blog;
        },
        loadding(state){
            return state.loadding
        }
    }

}