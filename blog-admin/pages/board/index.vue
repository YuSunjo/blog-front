<template>
  <div>
    <v-container>
      <v-btn @click="updateToggle">게시글 생성</v-btn>
    </v-container>
    <v-container v-if="createBoardFormToggle">
      <board-form />
    </v-container>
    <v-container>
      <div>
        <v-chip-group
            v-model='selected'
            class='mb-4'
            active-class='primary--text'
        >
          <v-chip key='ALL' large filter value='ALL' @click="onClickCategoryAll" >전체</v-chip>
          <v-chip v-for='(item,i) in retrieveCategory' :value='item.categoryName' :key='i' large filter
                  @click="onClickCategory(item.categoryName)">
            {{ item.categoryName }}
          </v-chip>
        </v-chip-group>
      </div>
      <div>
        <board-card nuxt :to="`/board/${board.id}`" v-for='(board, i) in boardList' :key='i'
                    :board='board'></board-card>
      </div>
      <v-pagination
          v-model='page'
          class='mt-8'
          :length='boardTotalPage'
          :total-visible='7'
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import BoardCard from '../../component/BoardCard';
import BoardForm from "../../component/board/BoardForm";

export default {
  async fetch({store, query}) {
    query.page = query.page == null ? 1 : query.page;
    query.size = query.size == null ? 5 : query.size;
    query.category = query.category == null ? null : query.category

    this.page = parseInt(query?.page) || 1;
    await store.dispatch('boards/retrieveBoard', query);
    return await store.dispatch('categorys/retrieveCategory');
  },
  components: {BoardForm, BoardCard},
  data() {
    return {
      selected: true,
      page: 1,
      createBoardFormToggle: false
    };
  },
  computed: {
    retrieveCategory() {
      return this.$store.state.categorys.categoryList;
    },
    boardList() {
      return this.$store.state.boards.boardList;
    },
    boardTotalPage() {
      return this.$store.state.boards.boardTotalPage;
    }
  },
  methods: {
    async onClickCategory(categoryName) {
      await this.$store.dispatch('boards/retrieveBoard', {
        page: 1,
        size: 5,
        category: categoryName
      })
    },
    async onClickCategoryAll() {
      await this.$store.dispatch('boards/retrieveBoard', {
        page: 1,
        size: 5
      })
    },
    updateToggle() {
      this.createBoardFormToggle = !this.createBoardFormToggle;
    }
  },
  watch: {
    page(newValue, oldValue) {
      if (oldValue)
        this.$router.push({ query: { ...this.$route.query, page: newValue } })
    }
  },
  watchQuery: true
};
</script>

<style scoped>

</style>