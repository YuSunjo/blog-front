export const state = () => ({
  backgroundImage: "",
});

export const mutations = {
  getConfig(state, payload) {
    state.backgroundImage = payload?.backgroundImage;
  },
};

export const actions = {
  nuxtServerInit({dispatch}) {
    return dispatch("members/getMyInfo");
  },
  async getConfig({ commit }) {
    try {
      let response = await this.$axios.get("/api/v1/admin/config", {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      });
      commit("getConfig", response.data.data);
    } catch (e) {
      console.log(e);
    }
  },
  async createConfig({ commit }, payload) {
    try {
      await this.$axios.post("/api/v1/admin/config", payload, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      });
    } catch (e) {
      console.log("설정파일 생성하는데 실패했습니다.");
    }
  },
};
