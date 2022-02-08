<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" md="3" v-for="(item, i) in boardList" :key="i">
        <board-card :board="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BoardCard from '../../components/BoardCard';

export default {
  components: {BoardCard},
  fetch({store}) {
    return store.dispatch('boards/retrieveBoard');
  },
  computed: {
    boardList() {
      return this.$store.state.boards.boardList;
    }
  },
}
</script>

<style scoped>

</style>