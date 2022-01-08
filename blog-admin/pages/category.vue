<template>
  <div>
    카테고리 관리 페이지
    <v-container>
      <v-btn @click="toggleChange">
        생성
      </v-btn>
      <v-container>
        <v-card v-if='createToggle === true'>
          <v-container>
            <v-form @submit.prevent='createCategory'>
              <v-text-field
                  required
                  v-model="categoryName"
              />
              <v-btn color='green' type='submit'>
                추가
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-container>
    </v-container>

    <div>
      <category-card v-for='(item, i) in categoryList' :key='i' :category='item' />
    </div>
  </div>
</template>

<script>
import CategoryCard from "../component/CategoryCard";
// import { mapState } from 'vuex';
export default {
  components: { CategoryCard },
  fetch({store}) {
    return store.dispatch('categorys/retrieveCategory');
  },
  data() {
    return {
      createToggle: false,
      categoryName: '',
    }
  },
  computed: {
    categoryList() {
      return this.$store.state.categorys.categoryList;
    },
    // ...mapState('categorys', ['categoryList']),
  },
  methods: {
    createCategory() {
      console.log('createCategory');
      this.$store.dispatch('categorys/createCategory', {
        categoryName: this.categoryName,
      })
      this.createToggle = false;
      this.categoryName = '';
    },
    toggleChange() {
      this.createToggle = !this.createToggle;
    }
  }
};
</script>

<style scoped>

</style>