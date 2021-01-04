import Vue from 'vue'
import Vuex from 'vuex'
import productMod from './product';
import cartMod from './cart';
import blogMod from './blog';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    prod : productMod,
    cart : cartMod,
    blog : blogMod
  }
})

