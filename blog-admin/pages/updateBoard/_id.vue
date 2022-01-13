<template>
  <v-container>
    <v-container>
      제목
      <v-text-field v-model='title'>
      </v-text-field>
    </v-container>
    <v-container>
      <client-only placeholder='loading...'>
        <ckeditor-nuxt v-model='contentHolder' :config='editorConfig' />
      </client-only>
    </v-container>
    <v-container>
      <v-select
        :items='isPrivateList'
        label='공개여부'
        item-text='content'
        item-value='value'
        prepend-icon="mdi-map"
        v-model='isPrivate'
        outlined
      ></v-select>
      <v-select
        :items='categoryList'
        label='카테고리'
        item-text='categoryName'
        item-value='id'
        prepend-icon="mdi-map"
        v-model='categoryId'
        outlined
      >
      </v-select>
    </v-container>
<!--    todo 썸네일 그림, 해쉬태그 리스트 뿌려주기-->
    여기에 썸네일 그림
    해쉬태그 리스트들 뿌려주기
    <v-container>
      <v-btn @click='updateBoard'>
        제출
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
  fetch({ store, params }) {
    store.dispatch("boards/getBoard", params.id)
    return store.dispatch("categorys/retrieveCategory");
  },
  computed: {
    board() {
      return this.$store.state.boards.board;
    },
    contentHolder() {
      return this.board.content
    },
    title() {
      return this.board.title
    },
    isPrivate() {
      return this.board.isPrivate
    }
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'http://115.71.238.146:9000/image/upload',
        },
      },
      // contentHolder: this.board.content,
      // title: "",
      hashTagList: [],
      // isPrivate: false,
      isPrivateList: [
        { content: "공개안함", value: true },
        { content: "공개함", value: false }
      ],
      categoryList: this.$store.state.categorys.categoryList,
      categoryId: 0
    };
  },
  methods: {
    updateBoard() {
      console.log(this.contentHolder);
      this.$store.dispatch("boards/updateBoard", {
        id: this.params.id,
        title: this.title,
        content: this.contentHolder,
        isPrivate: this.isPrivate,
        boardThumbnailUrl: null,
        categoryId: this.categoryId,
        hashTagList: [],
      });
    },
  },
};
</script>

<style scoped>

</style>