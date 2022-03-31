<template>
  <div>
    <skill />
    <hr class="pt-10"/>
    <v-container>
      <v-btn nuxt to="/blog">
        더 많은 추억을 보고 싶어요~
      </v-btn>
    </v-container>
    <v-row>
      <v-col cols="12" xs="12" md="3" v-for="(item, i) in boardList" :key="i">
        <board-card :board="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>

import Skill from '../components/skill';
import BoardCard from '../components/BoardCard';
export default {
  components: {BoardCard, Skill},
  fetch({store}) {
    return store.dispatch('boards/retrieveBoard', {page: 1, size: 8});
  },
  computed: {
    boardList() {
      return this.$store.state.boards.boardList;
    }
  }
}
</script>

<style scoped>

</style>