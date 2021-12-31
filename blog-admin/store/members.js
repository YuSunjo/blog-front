export const state = () => ({
  myInfo: null,
});

export const mutations = {
  hello(state) {
    state.hello = "hello world";
  },
  setMyInfo(state, payload) {
    state.myInfo = payload;
  },
};

export const actions = {
  async login({ commit }, payload) {
    let response = await this.$axios.post("/api/v1/admin/member/login", {
      email: payload.email,
      password: payload.password,
    });
    console.log(response);
    sessionStorage.setItem("token", response.data.data);
    let myResponse = await this.$axios.get("api/v1/admin/member", {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    });
    console.log(myResponse);
    commit("setMyInfo", myResponse.data.data);
    // await dispatch("getMyInfo");
  },
  // async getMyInfo({ commit }, payload) {
  //   let response = await this.$axios.get("api/v1/admin/member", {
  //     headers: {
  //       Authorization: sessionStorage.getItem("token"),
  //     },
  //   });
  //   console.log(response);
  //   commit("setMyInfo", response.data.data);
  // },
};
