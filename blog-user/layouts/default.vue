<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-toolbar-title :style="{fontsize: 12}">home</v-toolbar-title>

        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-btn @click="updateMyInfoToggle">
            INFO
          </v-btn>
        </template>
      </v-app-bar>
    </v-card>
    <div v-if="myInfoToggle">
      <div v-if="myInfo == null">
        <login-form>
        </login-form>
      </div>
      <h1 v-else>myInfo가 있다면</h1>
    </div>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" md="3">
            <profile />
          </v-col>
          <v-col cols="12" xs="12" md="9">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Profile from '../components/profile';
import LoginForm from '../components/loginForm'

export default {
  components: {Profile, LoginForm},
  data() {
    return {
      myInfoToggle: false,
    }
  },
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo;
    }
  },
  methods: {
    updateMyInfoToggle() {
      this.myInfoToggle = !this.myInfoToggle;
    }
  }
}
</script>

<style scoped>

</style>