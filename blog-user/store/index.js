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
};
