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
          Authorization: localStorage.getItem("token"),
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
      localStorage.setItem("token", response.data.data)
      let myResponse = await this.$axios.get("api/v1/member", {
        headers: {
          Authorization: localStorage.getItem("token"),
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
      localStorage.removeItem("token");
      commit("deleteMyInfo");
      await this.$router.push("/");
    } catch (e) {
      console.log(e);
    }
  },
  async google({commit}, payload) {
    try {
      const response = await this.$axios.post('api/v1/auth', payload);
      localStorage.setItem("token", response.data.data)
      let myResponse = await this.$axios.$get("api/v1/member", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      commit("setMyInfo", myResponse.data.data);
      await this.$router.go(0);
    } catch (e) {
      alert("로그인 실패")
      console.log(e);
    }
  }
};