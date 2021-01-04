import axios from 'axios'
export default {
    namespaced : true,
    state: {
        products : [],
        productDetail : [],
        strSearch : '',
        search : [],
        filter : [],
        loadding : false,
    },
    mutations: {
        getAllProduct(state , payload){
            return state.products = state.filter = payload;
        },
        getDetailProduct(state,payload){
            return state.productDetail = payload;
        },
        Search(state,payload){
            state.strSearch = payload;
            const searchStr = state.strSearch;
            if(searchStr == ""){
                return
            }
            return state.search = state.products.filter(search =>{
                return search.title.toLowerCase().includes(searchStr.toLowerCase())
            })
        },
        sortData(state , payload){
            const sortName = payload;
            console.log(sortName);
            if(sortName == "Desc"){
                return state.filter.sort((a,b) => {
                    return b.price - a.price
                })
            }else if(sortName == "Asce"){
                return state.filter.sort((a,b) => {
                    return a.price - b.price
                })
            }else if (sortName == "Name"){
                return state.filter.sort((a,b) =>{
                    var titleA = a.title.toUpperCase();
                    var titleB = b.title.toUpperCase();
                    if(titleA < titleB){
                        return -1
                    }
                    if(titleA > titleB){
                        return 1
                    }
                })
            } else {
                return state.filter
            }
        },
        filterCategory(state,payload){
            const filter = payload
            switch (filter) {
                case 'all' : 
                    return state.filter = state.products
                case 'men clothing' :
                    return state.filter = state.products.filter(item =>{
                        return item.category === filter
                    })
                case 'jewelery' : 
                    return state.filter = state.products.filter(item => {
                        return item.category === filter
                    })
                case 'electronics' : 
                    return state.filter = state.products.filter(item =>{
                        return item.category === filter
                    })
                case 'women clothing' : 
                    return state.filter = state.products.filter(item =>{
                        return item.category === filter
                    })
                default : 
                    return state.filter
            }
            // if(filter == "all"){
            //     return state.filter = state.products
            // }else if(filter == "men clothing"){
            //     return state.filter = state.products.filter(item => {
            //         return item.category === filter
            //     })
            // }else if(filter == "jewelery"){
            //     return state.filter = state.products.filter(item => {
            //         return item.category === filter
            //     })
            // }else if(filter == "electronics"){
            //     return state.filter = state.products.filter(item =>{
            //         return item.category === filter
            //     })
            // }else if(filter == "women clothing"){
            //     return state.filter = state.products.filter(item =>{
            //         return item.category === filter
            //     })
            // }else{
            //     return state.filter;
            // }
        }
    },
    actions: {
        async getAllProduct({ commit , state }){
            state.loadding = true
            await axios.get('https://fakestoreapi.com/products')
            .then(response => {
                commit('getAllProduct', response.data);
                state.loadding = false
            }).catch(error => {
                console.log(error.message);
            })
        },
        async getProductDetail({ commit , state } , prodID){
            state.loadding = true
            await axios.get(`https://fakestoreapi.com/products/${prodID}`)
            .then(response => {
                commit('getDetailProduct' , response.data)
                state.loadding = false
            }).catch(error => {
                console.log(error.message);
            })
        },
        search({ commit } , payload){
            commit('Search' , payload)
        },
        sortData({ commit } , payload){
           commit('sortData' , payload)
        },
        filterCategory({ commit } , payload){
            commit('filterCategory' , payload);
        }
    }, 
    getters: {
        getProduct(state){
            return state.products;
        },
        hasProducts(state){
            return state.products && state.products.length > 0
        },
        getDetailProduct(state){
            return state.productDetail;
        },
        getSearch(state){
            return state.search
        },
        hasSearch(state){
            return state.search.length > 0
        },
        filterCategory(state){
            return state.filter;
        },
        loadding(state){
            return state.loadding
        }
    }
}