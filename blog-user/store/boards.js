export const state = () => ({
  boardList: [],
  boardTotalPage: 0,
  board: null,
  hashTagList: []
});

export const mutations = {
  retrieveBoard(state, payload) {
    state.boardList = payload.boardList;
    state.boardTotalPage = payload.totalPage;
  },
  getBoard(state, payload) {
    state.board = payload;
  },
  retrieveHashTag(state, payload) {
    state.hashTagList = payload;
  }
};

export const actions = {
  async retrieveBoard({ commit }, payload) {
    let response = await this.$axios.get(`/api/v1/board/list?page=${payload.page}
    &size=${payload.size}${payload.category == null ? '' : `&category=${payload.category}`}
    ${payload.hashTag == null ? '' : `&hashTag=${payload.hashTag}`}`);
    commit("retrieveBoard", response.data.data);
  },
  async getBoard({ commit }, boardId) {
    let response = await this.$axios.get(`/api/v1/board/${boardId}`);
    commit("getBoard", response.data.data);
  },
  async retrieveHashTag({ commit }) {
    let response = await this.$axios.get("/api/v1/hashTag");
    commit("retrieveHashTag", response.data.data)
  }
};