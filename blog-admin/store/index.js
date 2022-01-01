export const state = () => ({
    hello: 'vuex'
})

export const mutations = {
    hello(state) {
        state.hello = "hello world"
    }
}

export const actions = {
    nuxtServerInit({commit, dispatch, state}, { req }) {
        console.log("이거 실행되는거냐")
        return dispatch('members/getMyInfo');
    }
}