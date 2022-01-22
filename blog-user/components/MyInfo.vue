<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" md="3">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" md="9">
        <v-card elevation="2">
          <v-card-text>
            {{myInfo.email}}
          </v-card-text>
          <v-card-text>
            닉네임
          </v-card-text>
        </v-card>
        <v-container>
          <v-btn>
            로그아웃
          </v-btn>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo;
    }
  }
}
</script>

<style scoped>

</style>