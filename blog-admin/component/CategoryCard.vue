<template>
  <v-container>
    <div>
      <v-banner
          v-model="v0"
          single-line
          transition="slide-y-transition"
      >
        {{category.categoryName}}
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
                v-model="categoryName"
                required
            />
            <v-btn color='green' type='submit'>
              변경
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
    }
  },
  data: () => ({
    v0: true,
    valid: false,
    updateToggle: false,
    categoryName: '',
  }),
  methods: {
    updateCategoryToggle() {
      console.log("updateCategoryToggle");
      this.updateToggle = !this.updateToggle;
    },
    updateCategory() {
      console.log("updateCategory")
      this.$store.dispatch("categorys/updateCategory", {
        id: this.category.id,
        categoryName: this.categoryName
      })
      this.categoryName = '';
      this.updateToggle = false;
    },
    deleteCategory() {
      alert("api를 만들고 할 예정")
      console.log("deleteCategory")
      // this.$store.dispatch("categorys/deleteCategory", {
      //   id: this.category.id
      // });
    }
  }
}
</script>

<style scoped>

</style>