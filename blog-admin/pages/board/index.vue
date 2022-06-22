<template>
  <div>
    <v-container>
      <v-btn @click="updateToggle">게시글 생성</v-btn>
    </v-container>
    <v-container v-if="createBoardFormToggle">
      <board-form :retrieveCategory="retrieveCategory">
        <template v-slot:create>
          생성
        </template>
      </board-form>
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
        <v-chip-group
            v-model='selected'
            class='mb-4'
            active-class='primary--text'
        >
          <v-chip v-for='(item,i) in hashTagList' :value='item' :key='i' large filter
                  @click="onClickHashTag(item)">
            {{ item }}
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
  components: {BoardForm, BoardCard},
  async asyncData({ query, $axios }) {
    query.page = query.page == null ? 1 : query.page;
    query.size = query.size == null ? 5 : query.size;
    query.category = query.category == null ? null : query.category
    query.hashTagList = query.hashTagList == null ? null : query.hashTagList
    let boardResponse = await $axios.get(`/api/v1/board/list?page=${query.page}
    &size=${query.size}${query.category == null ? '' : `&category=${query.category}`}
    ${query.hashTagList == null ? '' : `&hashTagList=${query.hashTagList}`}
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
    console.log(hashTagResponse)
    return {
      boardList: boardResponse.data.data.boardList,
      boardTotalPage: boardResponse.data.data.totalPage,
      retrieveCategory: categoryResponse.data.data,
      hashTagList: hashTagResponse.data.data,
      page: parseInt(query.page),
      size: parseInt(query.size),
      category: query.category,
    }
  },
  data() {
    return {
      selected: true,
      page: 1,
      createBoardFormToggle: false
    };
  },
  methods: {
    onClickCategory(categoryName) {
      this.$router.push({query: {...this.$router.query, category: categoryName}})
    },
    onClickCategoryAll() {
      this.$router.push({query: {...this.$router.query, category: null, hashTagList: null}})
    },
    updateToggle() {
      this.createBoardFormToggle = !this.createBoardFormToggle;
    },
    onClickHashTag(hashTag) {
      this.$router.push({query: {...this.$router.query, hashTagList: hashTag}})
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