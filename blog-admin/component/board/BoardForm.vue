<template>
  <div>
    <v-card align-self='center' class='mb-12'>
      <v-form ref='form' v-model='valid' @submit.prevent='onSubmitCreateBoardForm'>
        <v-row class='ma-0' align='center'>
          <v-card-title>블로그 글쓰기</v-card-title>
          <v-spacer></v-spacer>
          <v-btn
              class='mr-2'
              color='primary'
              large
              rounded
              :loading='loading'
              type='submit'
          >
            <v-icon left>mdi-content-save-outline</v-icon>
            저장
          </v-btn>
        </v-row>
        <v-container>
          <v-row>
            <v-container>
              <v-select :rules="rules && [rules.required]" v-model="categoryId" :items="retrieveCategory"
                        item-text='categoryName' item-value='id'/>
            </v-container>
            <v-container>
              <v-select :rules="rules && [rules.required]" v-model="isPrivate" :items="isPrivateList"
                        item-text='content' item-value='value'/>
            </v-container>
          </v-row>
          <v-row class='ma-0' align='center'>
            <v-text-field
                v-model='title'
                label='title'
                persistent-hint
                hint='제목'
                outlined
                :rules='[rules.required]'
            ></v-text-field>
          </v-row>
          <editor v-model="content"/>
        </v-container>
        <v-divider></v-divider>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import Editor from "@/component/board/Editor";

export default {
  fetch({store}) {
    return store.dispatch("categorys/retrieveCategory");
  },
  components: {Editor},
  computed: {
    retrieveCategory() {
      return this.$store.state.categorys.categoryList
    }
  },
  data() {
    return {
      valid: false,
      loading: false,
      title: '',
      content: '',
      categoryId: '',
      isPrivate: null,
      isPrivateList: [
        {content: "공개안함", value: true},
        {content: "공개함", value: false}
      ],
      rules: {
        required: value => !!value || '필수값입니다..'
      }
    }
  },
  methods: {
    async onSubmitCreateBoardForm() {
      try {
        if (this.$refs.form.validate()) {
          await this.$axios.$post('api/v1/board', {
            categoryId: this.categoryId,
            content: this.content,
            title: this.title,
            isPrivate: this.isPrivate,
            boardThumbnailUrl: null,
            hashTagList: []
          }, {
            headers: {
              Authorization: localStorage.getItem("admin_token"),
            },
          });
          await this.$router.go(0)
        }
      } catch (e) {
        alert("게시글 생성하는데 실패했습니다.")
      }
    }
  }
}
</script>

<style scoped>

</style>
