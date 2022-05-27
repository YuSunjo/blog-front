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
  deleteMyInfo(state) {
    state.myInfo = null;
  }
};

export const actions = {
  async login({ commit }, payload) {
    let response = await this.$axios.post("/api/v1/admin/member/login", {
      email: payload.email,
      password: payload.password,
    });
    localStorage.setItem("admin_token", response.data.data)
    let myResponse = await this.$axios.get("api/v1/admin/member", {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
    commit("setMyInfo", myResponse.data.data);
  },
  async getMyInfo({ commit }) {
    try {
      let response = await this.$axios.get("api/v1/admin/member", {
        headers: {
          Authorization: localStorage.getItem("admin_token")
        },
      });
      commit("setMyInfo", response.data.data);
    } catch (e) {
      await this.$router.push('/login')
    }
  },
  async logout({commit}) {
    try {
      localStorage.removeItem("admin_token");
      commit("deleteMyInfo");
      await this.$router.push("/login");
    } catch (e) {
      console.log(e);
    }
  }
};
