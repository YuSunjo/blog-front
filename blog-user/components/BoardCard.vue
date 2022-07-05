<template>
    <v-card
        class="mx-auto"
        max-width="200"
    >
      <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
      ></v-img>

      <v-card-title>
        {{board.title}}
      </v-card-title>
      <v-card-text>
        {{$moment(board.createdDate).fromNow()}}
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="orange lighten-2"
            text
            :to="`/blog/${board.id}`"
        >
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text v-html="board.content">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
    }
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

</style>