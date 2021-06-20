import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainState: {},
  },
  mutations: {
    SET_MAIN_STATE(state, data) {
      state.mainState = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
