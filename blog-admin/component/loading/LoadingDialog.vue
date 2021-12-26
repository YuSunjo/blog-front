<template>
  <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
  >
    <v-card
        color="primary"
        dark
    >
      <v-card-text>
        잠시만 기다려주세요...
        <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  model: {
    dialog: {
      type: Boolean,
      required: false,
      default: false,
    }
  }

}
</script>

<style>

</style>