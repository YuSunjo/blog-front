<template>
  <div>
    <v-container>
      <v-btn @click="updateToggle">게시글 생성</v-btn>
      <v-btn @click="onClickCategoryAll">전체</v-btn>
    </v-container>
    <v-container v-if="createBoardFormToggle">
      <board-form :retrieveCategory="retrieveCategoryWithId">
        <template v-slot:create>
          생성
        </template>
      </board-form>
    </v-container>
    <v-container>
      <v-select v-model="hashTag" :items="hashTagListResponse" label="해시태그" @change="onClickHashTag(hashTag)">
      </v-select>
      <v-select v-model="categoryName" :items="retrieveCategory" label="카테고리" @change="onClickCategory(categoryName)">
      </v-select>
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
  components: {BoardForm, BoardCard},
  async asyncData({query, $axios}) {
    query.page = query.page == null ? 1 : query.page;
    query.size = query.size == null ? 5 : query.size;
    query.category = query.category == null ? null : query.category
    query.hashTag = query.hashTag == null ? null : query.hashTag
    let boardResponse = await $axios.get(`/api/v1/board/list?page=${query.page}
    &size=${query.size}${query.category == null ? '' : `&category=${query.category}`}
    ${query.hashTag == null ? '' : `&hashTag=${query.hashTag}`}
    `, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
    let categoryResponse = await $axios.get("/api/v1/admin/category/list", {
      headers: {
        Authorization: localStorage.getItem("admin_token")
      }
    });
    let hashTagResponse = await $axios.get('/api/v1/hashTag', {
      headers: {
        Authorization: localStorage.getItem("admin_token")
      }
    })
    return {
      boardList: boardResponse.data.data.boardList,
      boardTotalPage: boardResponse.data.data.totalPage,
      retrieveCategoryWithId: categoryResponse.data.data,
      retrieveCategory: categoryResponse.data.data.map(category => category.categoryName),
      hashTagListResponse: hashTagResponse.data.data,
      page: parseInt(query.page),
      size: parseInt(query.size),
      category: query.category,
    }
  },
  data() {
    return {
      selected: true,
      categoryName: this.$route.query.category,
      page: 1,
      createBoardFormToggle: false,
      hashTag: this.$route.query.hashTag,
    };
  },
  methods: {
    onClickCategory(categoryName) {
      this.$router.push({query: {...this.$route.query, category: categoryName}})
    },
    onClickCategoryAll() {
      this.$router.push({query: {...this.$route.query, category: null, hashTag: null}})
    },
    updateToggle() {
      this.createBoardFormToggle = !this.createBoardFormToggle;
    },
    onClickHashTag(hashTag) {
      this.$router.push({query: {...this.$route.query, hashTag: hashTag}})
    }
  },
  watch: {
    page(newValue, oldValue) {
      if (oldValue)
        this.$router.push({query: {...this.$route.query, page: newValue}})
    }
  },
  watchQuery: true
};
</script>

<style scoped>

</style>