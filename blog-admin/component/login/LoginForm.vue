<template>
  <div>
    <v-container>
      <v-card>
        <v-form>
          <v-container>
            <v-text-field
              label="이메일"
              type="email"
              required
             />
            <v-text-field
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

}
</script>

<style scoped>

</style>