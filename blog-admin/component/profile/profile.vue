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
          <div class="text-overline mb-4">
            {{myInfo.email}}
          </div>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="white"
        >
          <v-icon v-if="myInfo.adminImage == null">
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