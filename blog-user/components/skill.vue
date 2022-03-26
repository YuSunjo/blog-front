<template>
  <div>
    <v-container>
      세월
      <image-slider />
    </v-container>
    <v-container v-for="(items, i) in titleList" :key="i">
      <v-row>
        <v-col v-for="(item, j) in items" :key="j">
          <v-card>
            <v-card-title>
              {{item}}
            </v-card-title>
            <v-container>
              <v-btn>
                둘러보기
              </v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SkillCard from './skillCard';
import ImageSlider from './imageSlider';
export default {
  components: {ImageSlider, SkillCard},
  data() {
    return {
      titleList: [
        ['2019', '2020'],
        ['2021', '2022'],
      ]
    }
  }
}
</script>

<style scoped>

</style>