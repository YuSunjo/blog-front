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
  async retrieveBoard({ commit }, payload) {
    let response = await this.$axios.get(`/api/v1/board/list?page=${payload.page}&size=${payload.size}${payload.category == null ? '' : `&category=${payload.category}`}`, {
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
    console.log(response.data.data)
    commit("getBoard", response.data.data);
  },
  async updateBoard({commit}, payload) {
    console.log(payload)
    await this.$axios.put("api/v1/board", {
      payload
    }, {
      headers: {
        Authorization: this.$cookies.get("admin_token"),
      }
    })
  }
};
