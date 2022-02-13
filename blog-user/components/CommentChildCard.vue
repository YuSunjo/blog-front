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
        {{childComment.memberInfoResponse.nickname}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="24" xs="24" md="1">
      </v-col>
      <v-col cols="24" xs="24" md="23">
        <div>
          {{childComment.content}}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  props: {
    childComment: {
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