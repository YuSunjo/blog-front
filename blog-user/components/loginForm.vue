<template>
  <div>
    <v-container>
      <v-card>
        <v-form ref='form' v-model='valid' @submit.p.prevent='onSubmitForm'>
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
            <v-row>
              <v-col cols="12" xs="12" md="2">
                <v-btn color="blue" type='submit' :disabled='!valid'>
                  로그인
                </v-btn>
              </v-col>
              <v-col cols="12" xs="12" md="2">
                <v-btn nuxt to="/signup">
                  회원가입
                </v-btn>
              </v-col>
              <v-col cols="12" xs="12" md="4">
                <googleSignIn
                    :clientId="'725334726540-v1gdp6m4ocdlrgf8i01f1os43sr46oc8.apps.googleusercontent.com'"
                    :successCallBack="getSuccessData"
                    :failureCallBack="getFailureData"
                    :customButtonId="'googleLoginButton'"
                    :customButton="true"
                >
                  <template>
                    <a id="googleLoginButton">
                      <v-img contain :src="require(`@/assets/google/google_login_image.png`)" height="40"></v-img>
                    </a>
                  </template>
                </googleSignIn>
              </v-col>
              <v-col cols="12" xs="12" md="4">
                <v-btn>페이스북 로그인 예정</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import googleSignIn from 'google-signin-vue/src/googleSignIn.vue'

export default {
  components: {googleSignIn},
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
      return this.$store.state.members.myInfo
    },
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('members/login', {
          email: this.email,
          password: this.password,
          provider: "LOCAL",
        })
            .then(() => {
              this.$router.push({
                path: '/',
              });
            })
            .catch(() => {
              alert("아이디 또는 비밀번호가 맞지 않습니다");
            })
      }
    },
    getSuccessData(user) {
      this.$store.dispatch('members/google', {
        email: user.email,
        name: user.name,
        accessToken: user.id,
        provider: 'GOOGLE'
      })
    },
    getFailureData(errorData) {
      console.log('[GOOGLE] error', errorData)
    },
  }
}
</script>

<style scoped>

</style>