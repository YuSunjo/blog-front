<template>
  <v-container>
    <v-card outlined >
      <v-card-title class="purple darken-2 text-center">
        <p>{{board.categoryName}}</p>
      </v-card-title>
      <v-card-title>
        <h2>{{board.title}}</h2>
      </v-card-title>
      <v-card-text v-html="board.content" />
    </v-card>
    <v-container>
      <v-chip v-for="(item, i) in board.hashTagList" :key="i">
        {{item}}
      </v-chip>
    </v-container>
  </v-container>
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