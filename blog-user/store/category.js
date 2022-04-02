export const state = () => ({
  categoryList: [],
});

export const mutations = {
  retrieveCategory(state, payload) {
    state.categoryList = payload;
  },
};

export const actions = {
  async retrieveCategory({ commit }) {
    let response = await this.$axios.get("/api/v1/category/list");
    commit("retrieveCategory", response.data.data);
  },
};