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
          <v-btn @click="updateMyInfoToggle(myInfoToggle)">
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
      <h1 v-else>
        <my-info />
      </h1>
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
import MyInfo from "../components/MyInfo";

export default {
  components: {MyInfo, Profile, LoginForm},
  data() {
    return {
    }
  },
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo;
    },
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
    updateMyInfoToggle(toggle) {
      this.myInfoToggle = !toggle
    }
  }
}
</script>

<style scoped>

</style>