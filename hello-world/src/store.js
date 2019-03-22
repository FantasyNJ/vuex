import Vue from 'vue'
import Vuex from '../vuex'
import moduleA from './storeModuleA'
import moduleB from './storeModuleB'

Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload = {}) {
      const n = payload.n || 1
      state.count += n
    }
  },
  actions: {
    increment(context){
      window.context = context
      context.commit('increment')
    }
  },
  getters: {
    count(state, getter){
      return state.count
    }
  },
  modules: {
    moduleA,
    moduleB
  }
})

window.ss = store
console.log(store, 'vuex')

export default store
