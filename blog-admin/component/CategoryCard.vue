<template>
  <div>
    <v-banner
      v-model="v0"
      single-line
      transition="slide-y-transition"
    >
      {{data.categoryName}}
      <template>
        <v-btn
          text
          color="primary"
          @click="updateCategoryToggle"
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
    <v-card v-if='updateToggle === true'>
      <v-container>
        <v-form @submit.prevent='updateCategory'>
          <v-text-field
            required
          />
          <v-btn color='green' type='submit'>
            변경
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    v0: true,
    valid: false,
    updateToggle: false,
  }),
  props: {
    data: {
      type: Object,
    }
  },
  methods: {
    updateCategoryToggle() {
      console.log("updateCategoryToggle");
      this.updateToggle = !this.updateToggle;
    },
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