<template>
  <div>
    블로그 상세페이지
  </div>
</template>

<script>
export default {
  fetch({store, params}) {
    return store.dispatch('boards/getBoard', params.id)
  },
  computed: {
    board() {
      return this.$store.state.boards.board;
    }
  }
}
</script>

<style scoped>

</style>