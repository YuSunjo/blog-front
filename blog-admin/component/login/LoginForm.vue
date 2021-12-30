<template>
  <div>
    <v-container>
      <v-card>
        <v-form>
          <v-container>
            <v-text-field
              v-model='email'
              :rules='emailRules'
              label="이메일"
              type="email"
              required
             />
            <v-text-field
              v-model='password'
              :rules='passwordRules'
              label="비밀번호"
              type="password"
              required
            />
            <v-btn color="blue">로그인</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || '이메일은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다'
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.',
      ]
    }
  },
  computed: {
    myInfo() {
      return this.$store.state.users.myInfo
    }
  }
}
</script>

<style scoped>

</style>