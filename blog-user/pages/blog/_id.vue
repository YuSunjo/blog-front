<template>
  <v-container>
    <v-card outlined >
      <v-card-title class="purple darken-2 text-center">
        <p>{{board.categoryName}}</p>
      </v-card-title>
      <v-card-title>
        <h2>{{board.title}}</h2>
      </v-card-title>
      <v-card-text v-html="board.content" />
    </v-card>
    <v-container>
      <v-chip v-for="(item, i) in board.hashTagList" :key="i">
        {{item}}
      </v-chip>
    </v-container>
    <v-container class="line">
      댓글  (여기에 댓글 수)
    </v-container>
    <v-container>
      <v-form ref="form" @submit.prevent="onSubmitCommentForm">
        <v-textarea
          outlined
          filled
          auto-grow
          clearable
          v-model="content"
          label="댓글을 적어주세요."
        />
        <v-btn type="submit" color="green" absolute right>
          댓글 등록
        </v-btn>
      </v-form>
    </v-container>
    <v-container>
      <comment-card v-for="(item, i) in commentList" :key="i" :comment="item">
      </comment-card>
    </v-container>
  </v-container>
</template>

<script>
import CommentCard from '../../components/CommentCard';
export default {
  components: {CommentCard},
  fetch({store, params}) {
    store.dispatch("comment/retrieveComment", params.id)
    return store.dispatch('boards/getBoard', params.id)
  },
  data() {
    return {
      content: "",
    }
  },
  computed: {
    board() {
      return this.$store.state.boards.board;
    },
    commentList() {
      return this.$store.state.comment.commentList;
    }
  },
  methods: {
    onSubmitCommentForm() {
      this.$store.dispatch("comment/createComment", {
        content: this.content,
        boardId: this.$route.params.id
      })
    }
  }
}
</script>

<style scoped>
.line {
  border-bottom: 1px solid black;
}
</style>