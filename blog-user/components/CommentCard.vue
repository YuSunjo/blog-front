<template>
  <v-container>
    <v-row>
      <v-col cols="24" xs="24" md="1">
        <v-avatar color="indigo">
          <v-icon>
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </v-col>
      <v-col cols="24" xs="24" md="23">
        {{comment.memberInfoResponse.nickname}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="24" xs="24" md="1">
      </v-col>
      <v-col cols="24" xs="24" md="23">
        <div>
          {{comment.content}}
        </div>
      </v-col>
    </v-row>
    <v-container>
      <comment-child-card v-for="(item, i) in comment.childCommentList" :key="i" :childComment="item">
      </comment-child-card>
    </v-container>
  </v-container>
</template>


<script>
import CommentChildCard from './CommentChildCard';
export default {
  components: {CommentChildCard},
  props: {
    comment: {
      childCommentList: {
        type: Array
      },
      commentId: {
        type: Number
      },
      content: {
        type: String
      },
      memberInfoResponse: {
        type: Object
      }
    }
  },
}
</script>

<style scoped>

</style>