export default {
    // namespaced: true,
    state: {
        countB: 0
    },
    mutations: {
        incrementB (state, payload = {}) {
            const n = payload.n || 1
            state.countB -= n
        }
    },
    actions: {
        incrementB({ state, commit, rootState }){
            window.context = context
            // console.log(context, 'context')
            context.commit('increment')
        }
    },
    getters: {
        countB(state, getter, rootState){
            // console.log(getter, 'gettergettergetter')
            return state.countB
        }
    }
}
