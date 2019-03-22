import Vue from 'vue'
import Redux from '../redux'
import moduleA from './rStoreModuleA'
import moduleB from './rStoreModuleB'

window.Vue = Vue

const store = new Redux.Store({
    namespaced: true,
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

window.redux = store
console.log(store)

export default store
