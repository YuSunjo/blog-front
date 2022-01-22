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
  async retrieveBoard({ commit }) {
    let response = await this.$axios.get("/api/v1/board/list?page=1&size=5");
    commit("retrieveBoard", response.data.data);
  },
  async getBoard({ commit }, boardId) {
    let response = await this.$axios.get(`/api/v1/board/${boardId}`);
    commit("getBoard", response.data.data);
  },
};