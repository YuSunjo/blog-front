<template>
  <div>
    <v-card align-self='center' class='mb-12'>
      <v-form ref='form' v-model='valid' @submit.prevent='onSubmitCreateBoardForm(id)'>
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
            <slot name="create">
            </slot>
            <slot name="update">
            </slot>
          </v-btn>
        </v-row>
        <v-container>
          <v-row>
            <v-container>
              <v-select :rules="rules && [rules.required]" v-model="categoryId" :items="retrieveCategory"
                        item-text='categoryName' item-value='id'/>
            </v-container>
            <v-container>
              <v-select :rules="rules && [rules.isBoolean]" v-model="isPrivate" :items="isPrivateList"
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
          <editor v-model="content" :board="content"/>
          <v-container>
            <v-chip v-for="(item, i) in hashTagList" :key="i">
              {{item.hashTag}}
            </v-chip>
          </v-container>
          <hashtags :tags="newHashTagList">
          </hashtags>
          <v-row class='ma-0' align='center'>
            <v-file-input
                label="이미지 업로드"
                outlined
                dense
                v-model="file"
                @change="selectFile"
            />
          </v-row>
          <v-img
              max-width="200"
              max-height="200"
              :src="this.boardThumbnailUrl"
          />
        </v-container>
        <v-divider></v-divider>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import Editor from "../board/Editor";
import Hashtags from "./Hashtags";

export default {
  components: {Hashtags, Editor},
  props: {
    board: {
      type: Object,
      required: false
    },
    retrieveCategory: {
      type: Array,
      required: true
    }
  },
  created() {
    this.content = this.board !== undefined ? this.board.content : '';
  },
  mounted() {
    this.id = this.board !== undefined ? this.board.id : null;
    this.title = this.board !== undefined ? this.board.title : '';
    this.content = this.board !== undefined ? this.board.content : '';
    this.categoryId = this.board !== undefined ? this.board.categoryId : '';
    this.isPrivate = this.board !== undefined ? this.board.isPrivate : null;
    this.hashTagList = this.board !== undefined ? this.board.hashTagList : [];
    this.boardThumbnailUrl = this.board !== undefined ? this.board.boardThumbnailUrl : null;
  },
  data() {
    return {
      id: null,
      valid: false,
      loading: false,
      title: '',
      content: '',
      categoryId: '',
      isPrivate: null,
      boardThumbnailUrl: '',
      file: null,
      isPrivateList: [
        {content: "공개안함", value: true},
        {content: "공개함", value: false}
      ],
      rules: {
        required: value => !!value || '필수값입니다..',
        isBoolean: (value) => {
          if (typeof value !== 'boolean') {
            return '선택해주세요.'
          }
        }
      },
      hashTagList: [],
      newHashTagList: []
    }
  },
  methods: {
    async onSubmitCreateBoardForm(id) {
      try {
        if (this.$refs.form.validate()) {
          if (id == null) {
            console.log("categoryId", this.categoryId)
            console.log("sdf", this.isPrivate)
            await this.$axios.$post('api/v1/board', {
              categoryId: this.categoryId,
              content: this.content,
              title: this.title,
              isPrivate: this.isPrivate,
              boardThumbnailUrl: this.boardThumbnailUrl,
              hashTagList: this.newHashTagList.map(hashtag => hashtag.value),
            }, {
              headers: {
                Authorization: localStorage.getItem("admin_token"),
              },
            });
            await this.$router.go(0)
          } else {
            await this.$axios.$put('api/v1/board', {
              id,
              categoryId: this.categoryId,
              content: this.content,
              title: this.title,
              isPrivate: this.isPrivate,
              boardThumbnailUrl: this.boardThumbnailUrl,
              hashTagList: this.newHashTagList.map(hashtag => hashtag.value).concat(this.board.hashTagList.map(hashTag => hashTag.hashTag))
            }, {
              headers: {
                Authorization: localStorage.getItem("admin_token"),
              },
            });
            await this.$router.push("/board");
          }

        }
      } catch (e) {
        alert("게시글 생성하는데 실패했습니다.")
      }
    },
    async selectFile(file) {
      this.file = file;
      const imageFormData = new FormData();
      imageFormData.append('upload', this.file)
      try {
        let response = await this.$axios.$post(`/image/upload?imageType=BOARD_THUMBNAIL`, imageFormData, {
          headers: {
            'ContentType': 'multipart/form-data'
          }
        });
        this.boardThumbnailUrl = response.data
        alert("업로드 성공하였습니다.")
      } catch (e) {
        alert("이미지 업로드하는데 실패했습니다.");
      }
    }
  }
}
</script>

<style scoped>

</style>
