<template>
  <v-container>
    <div>
      <v-chip-group
          v-model='selected'
          class='mb-4'
          active-class='primary--text'
      >
        <v-chip key='ALL' large filter value='ALL' @click="onClickCategoryAll">전체</v-chip>
        <v-chip v-for='(item,i) in retrieveCategory' :value='item.categoryName' :key='i' large filter
                @click="onClickCategory(item.categoryName)">
          {{ item.categoryName }}
        </v-chip>
        <v-chip v-for='(item,i) in retrieveHashTag' :value='item' :key='i' large filter
                @click="onClickHashTag(item)">
          {{ item }}
        </v-chip>
      </v-chip-group>
    </div>
    <v-row>
      <v-col cols="12" xs="12" md="3" v-for="(item, i) in boardList" :key="i">
        <board-card :board="item"/>
      </v-col>
    </v-row>
    <v-container>
      <v-container>
        <v-alert v-if='boardTotalPage === 0' type='error'>표시할 데이터가 존재하지 않습니다.</v-alert>
      </v-container>
      <v-pagination
          v-model="page"
          :length='boardTotalPage'
          :total-visible='8'
      />
    </v-container>
  </v-container>
</template>

<script>
import BoardCard from '../../components/BoardCard';

export default {
  components: {BoardCard},
  async fetch({store, query}) {
    query.page = query.page == null ? 1 : query.page;
    query.size = query.size == null ? 8 : query.size;
    query.category = query.category == null ? null : query.category
    query.hash
    await store.dispatch('category/retrieveCategory')
    await store.dispatch('boards/retrieveHashTag')
    return await store.dispatch('boards/retrieveBoard', {
      page: query.page,
      size: query.size,
      category: query.category,
      hashTag: query.hashTag,
    });
  },
  computed: {
    boardList() {
      return this.$store.state.boards.boardList;
    },
    boardTotalPage() {
      return this.$store.state.boards.boardTotalPage;
    },
    retrieveCategory() {
      return this.$store.state.category.categoryList;
    },
    retrieveHashTag() {
      return this.$store.state.boards.hashTagList;
    }
  },
  data() {
    return {
      page: 1,
      selected: true
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
    async onClickHashTag(hashTag) {
      await this.$store.dispatch('boards/retrieveBoard', {
        page: 1,
        size: 5,
        hashTag: hashTag,
      })
    }
  }
}
</script>

<style scoped>

</style>