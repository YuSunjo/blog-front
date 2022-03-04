<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" md="3" v-for="(item, i) in boardList" :key="i">
        <board-card :board="item" />
      </v-col>
    </v-row>
    <v-container>
      <v-pagination
          v-model="page"
          :length="6"
          @input="paginationRetrieveBoard(page)"
      />
    </v-container>
  </v-container>
</template>

<script>
import BoardCard from '../../components/BoardCard';

export default {
  components: {BoardCard},
  fetch({store}) {
    return store.dispatch('boards/retrieveBoard', {
      page: 1,
      size: 8,
    });
  },
  computed: {
    boardList() {
      return this.$store.state.boards.boardList;
    }
  },
  data() {
    return {
      page: 1,
      size: 8,
    }
  },
  methods: {
    paginationRetrieveBoard(page) {
      console.log("sd")
      this.$store.dispatch('boards/retrieveBoard', {
        page: page,
        size: 8
      })
    }
  }
}
</script>

<style scoped>

</style>