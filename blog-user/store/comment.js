export const state = () => ({
  commentList: [],
});

export const mutations = {
  createComment(state, payload) {
    state.commentList.push(payload);
  },
  retrieveComment(state, payload) {
    state.commentList = payload;
  }
};

export const actions = {
  async createComment({ commit }, payload) {
    try {
      let response = await this.$axios.post("/api/v1/comment", payload, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      commit("createComment", response.data.data);
    } catch (e) {
      console.log(e);
    }
  },
  async retrieveComment({commit}, payload) {
    try {
      let response = await this.$axios.get(`/api/v1/comment/${payload}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      });
      commit("retrieveComment", response.data.data)
    } catch (e) {
      console.log(e);
    }
  }
};