<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" md="8">
        <v-row>
          <v-container>
            <h2>
              {{board.title}}
            </h2>
          </v-container>
        </v-row>
        <v-row>
          <v-container v-html='board.content' />
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" md="4">
        여기에 해쉬태그 리스트 쫙 나열
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  fetch({ store, params }) {
    return store.dispatch('boards/getBoard', params.id)
  },
  computed: {
    board() {
      return this.$store.state.boards.board
    }
  }
};
</script>

<style scoped>

</style>