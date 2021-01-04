export default {
    namespaced : true,
    state: {
        cart : [],
        total : 0,
        quantity : 0,
    },
    mutations: {
        Addtocart(state,payload){
            const productData = payload;
            const productIndexCart = state.cart.findIndex(arr => 
                arr.id === productData.id);
            if(productIndexCart >= 0){
                state.cart[productIndexCart].quantity++;
            }else{
                const newCartItem = {
                    id : productData.id,
                    title : productData.title,
                    image : productData.image,
                    desc : productData.description,
                    price : productData.price,
                    quantity : 1
                }
                state.cart.push(newCartItem);
            }
            state.quantity++;
            state.total += productData.price;
        },
        removeProductToCart(state , payload){
            const prodId = payload
            const productIndex = state.cart.findIndex(arr => arr.id === prodId.id);
            const productData = state.cart[productIndex];
            state.cart.splice(productIndex , 1);
            state.quantity -= productData.quantity;
            state.total -= productData.price * productData.quantity;
        },
        plusCart(state,payload){
            const prodData = payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            state.cart[productIndex].quantity++;
            state.quantity++;
            state.total += prodData.price;
        },
        dashCart(state,payload){
            const prodData = payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            if(state.cart[productIndex].quantity <= 1){
                return
            }
            state.cart[productIndex].quantity--;
            state.quantity--;
            state.total -= prodData.price;
        }
    },
    actions: {
        Addtocart({commit , rootGetters} , payload){
            const prodData = payload;
            const products = rootGetters['prod/getProduct'];
            //console.log(products, prodData.id)
            const product = products.find(arr => arr.id == prodData.id);
            commit('Addtocart' , product);
        },
        removeProductToCart({ commit , rootGetters } , payload){
            const prodData = payload;
            const products = rootGetters['prod/getProduct'];
            const product = products.find(arr => arr.id === prodData.id);
            commit('removeProductToCart' , product);
        },
        plusCart({ commit , rootGetters } , payload){
            const prodData = payload;
            const products = rootGetters['prod/getProduct'];
            const product = products.find(arr => arr.id === prodData.id);
            commit('plusCart', product);
        },
        dashCart({ commit , rootGetters} , payload){
            const prodData = payload;
            const products = rootGetters['prod/getProduct'];
            const product = products.find(arr => arr.id === prodData.id);
            commit('dashCart' , product);
        }   
    }, 
    getters: {
        getCart(state){
            return state.cart;
        },
        AmountTotal(state){
            return state.total.toFixed(2);
        },
        quantity(state){
            return state.quantity;
        },
        hasCart(state){
            return state.quantity < 1;
        }
    }
}