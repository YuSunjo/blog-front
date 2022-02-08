export const state = () => ({
  myInfo: null,
});

export const mutations = {
  setMyInfo(state, payload) {
    state.myInfo = payload;
  },
  deleteMyInfo(state) {
    state.myInfo = null;
  }
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
      alert("이메일 또는 비밀번호가 맞지 않습니다.");
    }
  },
  async signUp({commit}, payload) {
    try {
      await this.$axios.post("/api/v1/member", payload);
    } catch (e) {
      console.log(e)
    }
  },
  async logout({commit}) {
    try {
      this.$cookies.remove("token");
      commit("deleteMyInfo");
      await this.$router.push("/");
    } catch (e) {
      console.log(e);
    }
  }
};