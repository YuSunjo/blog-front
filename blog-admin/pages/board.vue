<template>
  <div>
    <v-container>
      <div>
        <v-chip-group
            v-model="selected"
            class="mb-4"
            active-class="primary--text"
            multiple
            @change="changeSelected"
        >
          <v-chip key="ALL" large filter>전체</v-chip>
          <!--          <v-chip v-for="(item,i) in retrieveCategory" :key="(Object.keys(BroadcastState))[i]" large filter>{{item.text}}</v-chip>-->
          <v-chip v-for="(item,i) in retrieveCategory" :key="(Object.keys(BroadcastState))[i]" large filter>
            {{ item.categoryName }}
          </v-chip>
        </v-chip-group>
      </div>
      <div>
        <board-card></board-card>
        <board-card></board-card>
        <board-card></board-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import BoardCard from '../component/BoardCard';

export default {
  components: {BoardCard},
  data() {
    return {
      selected: 0,
      retrieveCategory: [
        {
          'id': 1,
          'categoryName': '자바'
        },
        {
          'id': 2,
          'categoryName': '도커'
        },
        {
          'id': 3,
          'categoryName': '도커허브'
        }
      ]
    }
  },
  methods: {
    changeSelected() {

    }
  }

};
</script>

<style scoped>

</style>