import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testerName: "",
  },
  mutations: {
    SET_TESTERNAME(state, testerName) {
      state.testerName = testerName
    },
  },
  actions: {
    setTesterName({ commit }, testerName) {
      commit("SET_TESTERNAME", testerName)
    },
  },
  modules: {},
  getters: {
    testerName(state) {
      return state.testerName
    },
  },
})
