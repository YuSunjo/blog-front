<template>
  <v-app>
    <nav>
      <v-app-bar
        elevation='4'
        shaped
        color='#42A5F5'
        dense
      >
        <v-btn depressed text nuxt to='/'>
          <v-icon dark>
            mdi-home
          </v-icon>
        </v-btn>
        <v-divider class='mx-4' vertical>
        </v-divider>
        <v-toolbar-title>
          blog-admin
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field label='검색' prepend-icon='mdi-magnify' hide-details
                        :style="{ display: 'flex', alignItems: 'center' }" />
          <v-btn text nuxt to='/' :style="{ display: 'flex', alignItems: 'center' }">
            <v-icon dark>mdi-account</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </nav>
    <v-row>
      <v-col cols='4'>
        <v-card max-width='500' class='mx-auto'>
          <v-list>
            <v-list-item-group v-model='model'>
              <v-list-item
                v-for='(item, i) in items'
                :key='i'
              >
                <v-list-item-content>
                  <v-list-item-title v-text='item.content'></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols='16'>

      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-apps",
          content: "profile",
          to: "/profile",
        },
        {
          icon: "mdi-apps",
          content: "app",
          to: "/app",
        },
        {
          icon: "mdi-apps",
          content: "board",
          to: "/board",
        },
      ],
      model: 0,
    };
  },
};
</script>

<style scoped>

</style>