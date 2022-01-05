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
    <v-container>
      <v-btn @click='createBoard'>
        제출
      </v-btn>
      <v-btn>
        임시저장
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
  fetch({ store }) {
    return store.dispatch("categorys/retrieveCategory");
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: "http://localhost:9000/image/upload",
        },
      },
      contentHolder: "",
      title: "",
      hashTagList: [],
      isPrivate: false,
      isPrivateList: [
        { content: "공개안함", value: true },
        { content: "공개함", value: false }
      ],
      categoryList: this.$store.state.categorys.categoryList,
      categoryId: 0
    };
  },
  methods: {
    createBoard() {
      console.log(this.contentHolder);
      this.$store.dispatch("boards/createBoard", {
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