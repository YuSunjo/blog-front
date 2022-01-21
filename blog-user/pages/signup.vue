<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
                v-model="email"
                label="이메일"
                type="email"
                :rules="emailRules"
                required
            />
            <v-text-field
                v-model="password"
                label="비밀번호"
                type="password"
                :rules="passwordRules"
                required
            />
            <v-text-field
                v-model="passwordCheck"
                label="비밀번호 확인"
                type="password"
                :rules="passwordCheckRules"
                required
            />
            <v-text-field
                v-model="nickname"
                label="닉네임"
                type="nickname"
                :rules="nicknameRules"
                required
            />
            <v-checkbox
                v-model="terms"
                label="안녕하세요."
                :rules="[ v => !!v || '약관에 동의하세요']"
                required
            />
            <v-btn color="green" type="submit">
              회원가입
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.myInfoToggle = false
  },
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || '이메일은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
      ],
      nicknameRules: [
        v => !!v || '닉네임은 필수입니다.',
      ],
      passwordRules: [
        v => !!v || '비밀번호은 필수입니다.',
      ],
      passwordCheckRules: [
        v => !!v || '비밀번호은 필수입니다.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.'
      ],
    }
  },
  computed: {
    myInfoToggle: {
      get: function() {
        return this.$store.state.myInfoToggle;
      },
      set: function (newValue) {
        this.$store.dispatch('updateMyInfoToggle', newValue)
      }
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('members/signUp', {
          email: this.email,
          password: this.password,
          provider: "LOCAL",
          nickname: this.nickname,
        })
            .then(() => {
              this.$router.push({
                path: '/',
              });
            })
            .catch((e) => {
              console.log('sdf')
              console.log(e.response.data)
              alert("회원가입 실패");
            });
      }

    },
  }
}

</script>

<style>

</style>
