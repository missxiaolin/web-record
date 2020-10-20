import { createStore } from 'vuex'

export default createStore({
  state: {
    number: 100
  },
  mutations: {
    SET_NUMBER(state, value) {
      state.number = value
    }
  },
  actions: {
    setNumber({ commit }, value) {
      commit('SET_NUMBER', value)
    }
  },
  modules: {
    a: {
      state: {
        aa: 11
      },
      mutations: {
        SET_AA(state, value) {
          state.aa = value
        }
      }
    },
    b: {}
  },
  getters: {
    aaValue: (state) => state.a.aa
  }
})
