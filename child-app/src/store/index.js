import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainStore: {},
  },
  mutations: {
    SET_MAIN_STORE(state, data) {
      state.mainStore = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
