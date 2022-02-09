<template>
  <div>
    <v-container>
      <v-img max-height="100%" max-width="100%" src="https://picsum.photos/1920/1080?random" />
    </v-container>
    <v-container>
      <v-card outlined elevation="0" rounded>
        <v-card-text>
          <p class="text-h2 text--primary">
            안녕하세요
          </p>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card outlined rounded>
        <v-card-text>
          <p class="text-h4 text--primary">
            tel
          </p>
          <p class="text-h4 text--primary">
            mail
          </p>
          <p class="text-h4 text--primary">
            git
          </p>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-icon>
        mdi-update
      </v-icon>
    </v-container>
    <v-container>
      <v-chip v-for="(item, i) in hashTagList" :key="i">{{item}}</v-chip>
    </v-container>
  </div>
</template>

<script>
export default {
  fetch({store}) {
    return store.dispatch('boards/retrieveHashTag');
  },
  computed: {
    hashTagList() {
      return this.$store.state.boards.hashTagList;
    }
  }
}
</script>

<style scoped>

</style>