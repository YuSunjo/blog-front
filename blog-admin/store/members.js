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
    this.$cookies.set("token", response.data.data)
    let myResponse = await this.$axios.get("api/v1/admin/member", {
      headers: {
        Authorization: this.$cookies.get("token"),
      },
    });
    commit("setMyInfo", myResponse.data.data);
    // await dispatch("getMyInfo");
  },
  async getMyInfo({ commit }) {
    try {
      let response = await this.$axios.get("api/v1/admin/member", {
        headers: {
          Authorization: this.$cookies.get("token")
        },
      });
      commit("setMyInfo", response.data.data);
    } catch (e) {
      await this.$router.push('/login')
    }
  },
};
