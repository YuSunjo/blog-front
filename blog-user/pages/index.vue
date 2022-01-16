<template>
  <div>
    <skill />
    <hr class="pt-10"/>
    <v-row>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
      <v-col cols="12" xs="12" md="3">
        <board-card />
      </v-col>
    </v-row>
  </div>
</template>

<script>

import Skill from '../components/skill';
import BoardCard from '../components/BoardCard';
export default {
  components: {BoardCard, Skill}
}
</script>

<style scoped>

</style>