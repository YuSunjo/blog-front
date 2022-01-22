export const state = () => ({
  uploadImage: '',
})

export const mutations = {
  uploadImage(state, payload) {
    state.uploadImage = payload;
  }
}

export const actions = {
  async uploadImage({commit}, payload) {
    let response = await this.$axios.post('/image/upload', payload, {
      headers: {
        Authorization: this.$cookies.get("admin_token"),
      }
    });
    commit('uploadImage', response.data.data)
  }
}