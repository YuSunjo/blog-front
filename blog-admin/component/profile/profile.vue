<template>
  <div>
    <v-container>
      profile
    </v-container>
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div>
            <img v-if="myInfo.memberImage == null" src="https://potato-velog-sunjo.s3.ap-northeast-2.amazonaws.com/USER/20210808183424400cat.jpg"
              width="40%" height="40%"
            >
            <img v-else :src="myInfo.memberImage">
          </div>
          <div class="text-overline mb-4">
            {{myInfo.email}}
          </div>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="white"
        >
          <v-icon v-if="myInfo.memberImage == null">
            mid-account
          </v-icon>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
            @click="logout"
        >
          로그아웃
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('members/logout')
    }
  }
};
</script>

<style scoped>

</style>