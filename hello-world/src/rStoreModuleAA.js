export default {
    // namespaced: true,
    state: {
        countAA: 0
    },
    mutations: {
        incrementAA (state, payload = {}) {
            const n = payload.n || 1
            state.countAA -= n
        }
    },
    actions: {
        incrementAA({ state, commit, rootState }){
            window.context = context
            // console.log(context, 'context')
            context.commit('increment')
        }
    },
    getters: {
        countAA(state, getter, rootState){
            // console.log(getter, 'gettergettergetter')
            return state.countAA
        }
    }
}
