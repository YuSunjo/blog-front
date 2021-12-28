<template>
  <div>
    통계 페이지
    <v-btn @click="onClickHelloWorld">
      {{ hello }}
    </v-btn>
  </div>
</template>

<script>
export default {
  date() {

  },
  computed: {
    hello() {
      return this.$store.state.hello;
    }
  },
  methods: {
    onClickHelloWorld() {
      this.$store.commit('hello')
    }
  }
};
</script>

<style scoped>

</style>