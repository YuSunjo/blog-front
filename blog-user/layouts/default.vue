<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-toolbar-title :style="{fontsize: 12}">home</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                color="yellow"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab @click="updateMyInfoToggle">myInfo</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
<!--      <v-sheet-->
<!--          id="scrolling-techniques-4"-->
<!--          class="overflow-y-auto"-->
<!--          max-height="600"-->
<!--          v-if="myInfoToggle"-->
<!--      >-->
<!--        <v-container style="height: 1000px;"></v-container>-->
<!--      </v-sheet>-->
    </v-card>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'myPage' },
    ],
    // myInfoToggle: false,
  }),
  methods: {
    updateMyInfoToggle: () => {
      // this.myInfoToggle = !this.myInfoToggle;
    }
  }
}
</script>

<style scoped>

</style>