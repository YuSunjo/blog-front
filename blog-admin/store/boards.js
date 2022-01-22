export const state = () => ({
  boardList: [],
  boardTotalPage: 0,
  board: null,
});

export const mutations = {
  retrieveBoard(state, payload) {
    state.boardList = payload.boardList;
    state.boardTotalPage = payload.totalPage;
  },
  getBoard(state, payload) {
    state.board = payload;
  },
};

export const actions = {
  async createBoard({ commit }, payload) {
    await this.$axios.post("/api/v1/board", payload, {
      headers: {
        Authorization: this.$cookies.get("admin_token"),
      },
    });
    await this.$router.push("/board");
  },
  async retrieveBoard({ commit }) {
    let response = await this.$axios.get("/api/v1/board/list?page=1&size=5", {
      headers: {
        Authorization: this.$cookies.get("admin_token"),
      },
    });
    commit("retrieveBoard", response.data.data);
  },
  async getBoard({ commit }, boardId) {
    let response = await this.$axios.get(`/api/v1/board/${boardId}`, {
      headers: {
        Authorization: this.$cookies.get("admin_token"),
      },
    });
    commit("getBoard", response.data.data);
  },
};
