// import Fuse from "fuse.js"; //* feature search
import Service from "@/api";
import { isEmptyObject, replaceItem, removeItem } from "@/utils";
import { TABLE } from "@/utils/constants";

const table = TABLE.PIECE;

//default state
const initialState = () => ({
  // all: [], // all data wrapper of list
  // search: [], // data search //* feature search
  list: [], // all data
  item: {}, // data select (detail, edit)
  loading: false,
  loadingItem: false
});

/**
 * State object
 * Use: this.$store.Namemodule.key
 */
const state = initialState();

/**
 * Getter functions
 * Use: this.$store.getters['Namemodule/key']
 */
const getters = {
  // all: state => state.all,
  // search: state => state.search
  list: state => state.list,
  item: state => state.item,
  loading: state => state.loading,
  loadingItem: state => state.loadingItem
};

/**
 * Mutations
 * this.$store.commit('Namemodule/key', data)
 */
const mutations = {
  SET(state, data) {
    state.list = data;
  },

  SET_ITEM(state, data) {
    state.item = data;
  },

  ADD(state, data) {
    // state.list.push(data);
    state.list.unshift(data);
  },

  EDIT(state, data) {
    state.list = replaceItem(state.list, data, "id");
  },

  REMOVE(state, data) {
    removeItem(state.list, data);
  },

  CLEAN(state) {
    state.list = [];
  },

  //reset state
  RESET(state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key];
    });
  }

  //* feature search
  // SEARCH(state, data) {
  //   const options = {
  //     shouldSort: true,
  //     threshold: 0.5,
  //     location: 0,
  //     distance: 50, //Xác định mức độ trùng khớp phải ở vị trí tìm thấy ký tự
  //     minMatchCharLength: 2,
  //     findAllMatches: true,
  //     keys: ["title", "description"]
  //   };

  //   const fuse = new Fuse(state.all, options);

  //   //extend search join 2 char 'Man 'Old
  //   let results = fuse.search(data);
  //   if (results && results.length) {
  //     let output = [];
  //     for (const it of results) {
  //       output.push(it.item);
  //     }
  //     state.search = output;
  //   } else {
  //     state.search = [];
  //   }
  // },
};
/**
 * Actions
 * Use: this.$store.dispatch('Namemodule/key', data)
 */
const actions = {
  setItem: ({ commit }, val) => {
    commit("SET_ITEM", val);
  },

  setup: async ({ commit, state }, opt = {}) => {
    state.loading = true; //set loading

    opt.url = table;
    let result = await Service.getAll(opt);
    if (result.data) {
      if (result.data.pages) result = result.data.pages;
      else {
        result = result.data;
      }
    }

    state.loading = false; //set loading
    commit("SET", result || []);
  },

  find: async ({ commit, state }, opt = {}) => {
    state.loadingItem = true; //set loading

    if (isEmptyObject(opt)) return {};
    let result = state.list.find(val => val[opt.key] === opt.value);
    if (!result) {
      result = await Service.get(opt);
      if (result.data) {
        if (result.data.page) result = result.data.page;
        else {
          result = result.data;
        }
      }
    }
    state.loadingItem = false; //set loading
    commit("SET_ITEM", result || {});

    return result;
  },

  add: async ({ commit, state }, opt = {}) => {
    state.loading = true; //set loading

    let result = await Service.add(opt);
    if (result.data) {
      if (result.data.page) result = result.data.page;
      else {
        result = result.data;
      }
    }

    state.loading = false; //set loading
    commit("ADD", result);
  },

  edit: async ({ commit, state }, opt = {}) => {
    state.loading = true; //set loading

    let result = await Service.edit(opt);
    if (result.data) {
      if (result.data.page) result = result.data.page;
      else {
        result = result.data;
      }
    }

    state.loading = false; //set loading
    commit("EDIT", result);
  },

  remove: async ({ commit, state }, opt = {}) => {
    state.loading = true; //set loading

    let result = await Service.remove(opt);
    if (result.data) {
      if (result.data.page) result = result.data.page;
      else {
        result = result.data;
      }
    } else {
      result = opt.data;
    }

    state.loading = false; //set loading
    commit("REMOVE", result);
  },

  clean: async ({ commit }) => {
    commit("CLEAN");
  },

  reset: async ({ commit }) => {
    commit("RESET");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
