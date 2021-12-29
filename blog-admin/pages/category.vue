<template>
  <div>
    카테고리 관리 페이지
    <div>
      <category-card v-for='(item, i) in categoryList' :key='i' :data='item'></category-card>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../component/CategoryCard";
export default {
  components: { CategoryCard },
  // fetch({store}) {
  //   store.dispatch('categorys/retrieveCategory');
  // },
  computed: {
    categoryList() {
      return this.$store.state.categorys.categoryList;
    }
  }
};
</script>

<style scoped>

</style>