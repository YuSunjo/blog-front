<template>
  <div>
    <v-banner
      v-model="v0"
      single-line
      transition="slide-y-transition"
    >
      No Internet connection
      <template>
        <v-btn
          text
          color="primary"
          @click="updateCategory"
        >
          수정
        </v-btn>
        <v-btn
          text
          color="error"
          @click="deleteCategory"
        >
          삭제
        </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script>
export default {
  data: () => ({
    v0: true,
  }),
  methods: {
    updateCategory() {
      console.log("updateCategory")
    },
    deleteCategory() {
      console.log("deleteCategory")
    }
  }
}
</script>

<style scoped>

</style>