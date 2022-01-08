export const state = () => ({
  commentList: []
});

export const mutations = {
  retrieveComment(state, payload) {
    state.commentList = payload;
  }
};

export const actions = {
  async retrieveComment({ commit }, boardId) {
    let response = await this.$axios.get(`/api/v1/admin/comment/${boardId}`, {
      headers: {
        Authorization: this.$cookies.get("token")
      }
    });
    console.log(response.data.data)
    commit("retrieveComment", response.data.data);
  },
};
