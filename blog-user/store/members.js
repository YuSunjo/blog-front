export const state = () => ({
  myInfo: null,
});

export const mutations = {
  setMyInfo(state, payload) {
    state.myInfo = payload;
  },
};

export const actions = {
  async getMyInfo({ commit }) {
    try {
      let response = await this.$axios.get("/api/v1/member", {
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      });
      commit("setMyInfo", response.data.data);
    } catch (e) {
      console.log(e);
    }
  },
  async login({commit}, payload) {
    try {
      let response = await this.$axios.post("/api/v1/member/login", payload);
      this.$cookies.set("token", response.data.data)
      let myResponse = await this.$axios.get("api/v1/member", {
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      });
      commit("setMyInfo", myResponse.data.data);
    } catch (e) {
      console.log(e)
    }
  },
  async signUp(payload) {
    try {
      await this.$axios.post("/api/v1/member", payload);
    } catch (e) {
      console.log(e)
    }
  }
};