export const state = () => ({
  categoryList: [],
});

export const mutations = {
  retrieveCategory(state, payload) {
    state.categoryList = payload;
  },
  createCategory(state, payload) {
    state.categoryList.unshift(payload)
  },
  updateCategory(state, payload) {
    let index = state.categoryList.findIndex(v => v.id === payload.id);
    state.categoryList[index].categoryName = payload.categoryName
  }
};

export const actions = {
  async retrieveCategory({ commit }) {
    let response = await this.$axios.get("/api/v1/admin/category/list", {
      headers: {
        Authorization: this.$cookies.get("admin_token")
      }
    });
    console.log(response.data.data)
    commit("retrieveCategory", response.data.data);
  },
  async createCategory({commit}, payload) {
    try {
      let response = await this.$axios.post("/api/v1/admin/category", payload, {
        headers: {
          Authorization: this.$cookies.get("admin_token")
        }
      });
      commit("createCategory", response.data.data)
    } catch (e) {
      console.log(this.error);
      alert('생성하는데 실패했습니다.');
    }
  },
  async updateCategory({commit}, payload) {
    try {
      let response = await this.$axios.put("/api/v1/admin/category", payload, {
        headers: {
          Authorization: this.$cookies.get("admin_token")
        }
      });
      commit("updateCategory", response.data.data);
    } catch (e) {
      alert('업데이트 실패');
    }
  },
  // async deleteCategory({commit}, payload) {
  //
  // }
};
