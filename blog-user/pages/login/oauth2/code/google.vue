<template>
  <v-container>
    {{this.$route.query.code}}
    <v-container>
      {{code}}
      <v-btn text @click="onClickGoogleLogin">
        sadf
      </v-btn>
    </v-container>
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
      redirectUri: 'http://localhost:3000/login/oauth2/code/google'
    })
  },
  data() {
    return {
      code: this.$route.query.code
    }
  },
  methods: {
    onClickGoogleLogin() {
      this.$store.dispatch('members/google', {
        code: this.code,
        redirectUri: 'http://localhost:3000/login/oauth2/code/google'
      })
    }
  }
}
</script>

<style scoped>

</style>