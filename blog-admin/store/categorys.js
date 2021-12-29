export const state = () => ({
  hello: "vuex",
  categoryList: [
    {
      id: 1,
      categoryName: "category1",
    },
    {
      id: 2,
      categoryName: "category2",
    },
    {
      id: 3,
      categoryName: "category3",
    },
  ],
});

export const mutations = {
  hello(state) {
    state.hello = "hello world";
  },
  retrieveCategory(state, payload) {
    state.categoryList.push(payload);
  },
};

export const actions = {
  async retrieveCategory({ commit }, payload) {
    let response = await this.$axios.get("/api/v1/admin/category/list");
    console.log("response" + response);
    console.log("payload" + payload);
    commit("retrieveCategory", payload);
  },
};
