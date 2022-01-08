<template>
  <v-container>
    <div>
      <v-banner
        single-line
        transition="slide-y-transition"
        v-for="(item, i) in commentList" :key="i"
      >
        <p>작성자</p>
        <p>{{ item.content }}</p>
      </v-banner>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
    }
  },
  computed: {
    commentList() {
      return this.$store.state.comment.commentList;
    }
  },
  fetch() {
    this.$store.dispatch("comment/retrieveComment", this.board.id)
  }
};
</script>

<style scoped>

</style>