export const state = () => ({
  hello: "vuex",
  categoryList: [],
});

export const mutations = {
  hello(state) {
    state.hello = "hello world";
  },
};
