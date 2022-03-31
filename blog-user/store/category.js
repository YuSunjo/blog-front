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
    let response = await this.$axios.get("http://115.71.238.146:9000/api/v1/admin/category/list");
    commit("retrieveCategory", response.data.data);
  },
};