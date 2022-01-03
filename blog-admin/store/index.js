export const state = () => ({
    hello: 'vuex',
    errorMessage: '',
    backgroundImage: '',
})

export const mutations = {
    hello(state) {
        state.hello = "hello world"
    },
    getConfig(state, payload) {
        state.backgroundImage = payload.backgroundImage
    }
}

export const actions = {
    nuxtServerInit({commit, dispatch, state}, { req }) {
        return dispatch('members/getMyInfo');
    },
    async getConfig({commit}) {
        try {
            let response = await this.$axios.get('/api/v1/admin/config', {
                headers: {
                    Authorization: this.$cookies.get("token")
                }
            });
            commit('getConfig', response.data.data);
        } catch (e) {
            alert("설정 파일을 불러오는데 실패했습니다.");
        }
    }
}