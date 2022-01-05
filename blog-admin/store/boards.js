export const state = () => ({
  boardList: [],
  boardTotalPage: 0,
});

export const mutations = {
  retrieveBoard(state, payload) {
    state.boardList = payload.boardList;
    state.boardTotalPage = payload.totalPage;
  },
};

export const actions = {
  async createBoard({ commit }, payload) {
    await this.$axios.post("/api/v1/board", payload, {
      headers: {
        Authorization: this.$cookies.get("token"),
      },
    });
    await this.$router.push("/board");
  },
  async retrieveBoard({ commit }) {
    let response = await this.$axios.get("/api/v1/board/list?page=1&size=5", {
      headers: {
        Authorization: this.$cookies.get("token"),
      },
    });
    commit("retrieveBoard", response.data.data);
  },
};
