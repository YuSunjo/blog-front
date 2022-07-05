<template>
  <v-container>
    <v-card>
      <v-container>
        <v-img
            max-width="200"
            max-height="200"
            :src="board.boardThumbnailUrl"
        />
        <v-card-title v-if="board.title.length < 10">
          {{board.title}}
        </v-card-title>
        <v-card-title v-else>
          {{cutTitle}}
        </v-card-title>
        <v-card-text v-if="board.content.length < 20">
          <div v-html='board.content'></div>
        </v-card-text>
        <v-card-text v-else>
          <div v-html='cutContent'></div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color='primary' :to="`/board/${board.id}`">
            <v-icon color="orange">mdi-cached</v-icon>
          </v-btn>
          <v-btn text color="primary" @click='changeToggleAndRetrieveComment'>
            <v-icon color="orange">mdi-comment-outline</v-icon>
          </v-btn>
          <v-btn text color="primary" @click='deleteBoard'>
            <v-icon color="orange">mdi-delete</v-icon>
          </v-btn>
          <v-btn text color='primary' :to="`/board/${board.id}`">
            <v-icon color='orange'>mdi-update</v-icon>
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
    <v-container v-if='commentToggle'>
      <CommentCard :board="board"/>
    </v-container>
  </v-container>
</template>

<script>
import CommentCard from "./CommentCard";
export default {
  components: {CommentCard},
  props: {
    board: {
      type: Object,
    }
  },
  data() {
    return {
      commentToggle: false,
      // cutTitle: this.board.title.substr(0, 10),
      // cutContent: this.board.content.substr(0, 20),
    }
  },
  computed: {
    cutTitle() {
      return this.board.title.substr(0, 10)
    },
    cutContent() {
      return this.board.content.substr(0, 20)
    }
  },
  methods: {
    deleteBoard() {
      console.log("deleteBoard");
    },
    changeToggleAndRetrieveComment() {
      this.$store.dispatch('')
      this.commentToggle = !this.commentToggle
    }
  }
}
</script>

<style scoped>

</style>