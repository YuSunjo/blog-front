export const state = () => ({

});

export const mutations = {

};

export const actions = {
  nuxtServerInit({dispatch}) {
    return dispatch("members/getMyInfo");
  },
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
