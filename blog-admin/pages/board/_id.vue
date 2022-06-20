<template>
  <v-container>
    <board-form :board="board" :retrieveCategory="retrieveCategory">
      <template v-slot:update>
        수정
      </template>
    </board-form>
  </v-container>
</template>

<script>
import BoardForm from "../../component/board/BoardForm";

export default {
  components: {BoardForm},
  async asyncData({params, $axios}) {
    try {
      const board = await $axios.$get(`api/v1/board/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      });
      const category = await $axios.$get("/api/v1/admin/category/list", {
        headers: {
          Authorization: localStorage.getItem("admin_token")
        }
      })
      return {
        board: board.data,
        retrieveCategory: category.data
      }
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      loading: false,
    }
  },
};
</script>

<style scoped>

</style>