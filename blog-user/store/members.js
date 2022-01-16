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
};