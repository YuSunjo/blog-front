export const state = () => ({
  myInfoToggle: false,
});

export const mutations = {
  updateMyInfoToggle(state, myInfoToggle) {
    state.myInfoToggle = myInfoToggle
  }
};

export const actions = {
  nuxtServerInit({dispatch}) {
    return dispatch("members/getMyInfo");
  },
  updateMyInfoToggle({commit}, myInfoToggle) {
    commit('updateMyInfoToggle', myInfoToggle)
  }
  // async getConfig({ commit }) {
  //   try {
  //     let response = await this.$axios.get("/api/v1/admin/config", {
  //       headers: {
  //         Authorization: this.$cookies.get("token"),
  //       },
  //     });
  //     commit("getConfig", response.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
};
