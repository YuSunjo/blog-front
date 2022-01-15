<template>
  <div>
    <v-card>
      <v-card-title>
        {{title}}
      </v-card-title>
      <v-card-text>
        <p v-for="(item, i) in skills" :key="i">{{item}}</p>
        <p>JAVA</p>
        <p>JAVA</p>
        <p>JAVA</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    skills: {
      type: Array
    }
  },
}
</script>

<style scoped>

</style>