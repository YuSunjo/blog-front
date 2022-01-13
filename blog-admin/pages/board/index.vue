<template>
  <div>
    <v-container>
      <div>
        <v-chip-group
          v-model='selected'
          class='mb-4'
          active-class='primary--text'
        >
          <v-chip key='ALL' large filter :value='0'>전체</v-chip>
          <v-chip v-for='(item,i) in retrieveCategory' :value='item.id' :key='i' large filter>
            {{ item.categoryName }}
          </v-chip>
        </v-chip-group>
      </div>
      <div>
        <board-card nuxt :to="`/board/${item.id}`" v-for='(item, i) in boardList' :key='i' :board='item'></board-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import BoardCard from "../../component/BoardCard";

export default {
  async fetch({ store }) {
    await store.dispatch("boards/retrieveBoard");
    return store.dispatch("categorys/retrieveCategory");
  },
  components: { BoardCard },
  data() {
    return {
      selected: true,
      retrieveCategory: this.$store.state.categorys.categoryList,
      boardList: this.$store.state.boards.boardList,
    };
  },
  methods: {},

};
</script>

<style scoped>

</style>