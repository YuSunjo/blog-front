<template>
  <v-container>
    <v-card>
      <v-container>
        <v-img />
        <v-card-title>
          {{board.title}}
        </v-card-title>
        <v-card-text>
          <div>
            <div>{{ board.content }}</div>
          </div>
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
        </v-card-actions>
      </v-container>
    </v-card>
    <v-container v-if='commentToggle'>
      <CommentCard />
    </v-container>
  </v-container>
</template>

<script>
import CommentCard from "@/component/CommentCard";
export default {
  components: {CommentCard},
  props: {
    board: {
      type: Object,
    }
  },
  data() {
    return {
      commentToggle: false
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