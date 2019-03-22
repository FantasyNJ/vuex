import moduleAA from './storeModuleAA'
export default {
    // namespaced: true,
    state: {
        countA: 0
    },
    mutations: {
        incrementA (state, payload = {}) {
            const n = payload.n || 1
            state.countA -= n
        }
    },
    actions: {
        incrementA({ state, commit, rootState }){
            window.context = context
            // console.log(context, 'context')
            context.commit('increment')
        }
    },
    getters: {
        countA(state, getter, rootState){
            // console.log(getter, 'gettergettergetter')
            return state.countA
        }
    },
    modules: {
        moduleAA
    }
}
