<template>
  <v-container>
    로그인중!~
  </v-container>
</template>

<script>
export default {
  // created() {
  //   // console.log(this.$route.query.code)
  //   // console.log(this.$route.query)
  //   this.$store.dispatch('members/google', {
  //     code: this.$route.query.code,
  //     redirectUri: 'http://localhost:3000/login/oauth2/code/google'
  //   })
  // },
  async asyncData({store, query}) {
    console.log(query.code)
    console.log(store)
    store.dispatch('members/google', {
      code: query.code,
      redirectUri: process.env.REDIRECT_URI
    })
  },
}
</script>

<style scoped>

</style>