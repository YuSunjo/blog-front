export const state = () => ({
    hello: 'vuex',
    errorMessage: '',
})

export const mutations = {
    hello(state) {
        state.hello = "hello world"
    }
}

export const actions = {
    nuxtServerInit({commit, dispatch, state}, { req }) {
        return dispatch('members/getMyInfo');
    }
}