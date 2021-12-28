<template>
  <v-app>
    <LoadingDialog :dialog="true" />
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        clipped
        app
    >
      <v-divider></v-divider>
      <v-list>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
        >
          <v-list-item-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        clipped-left
        app
    >
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer"/>
      <v-btn
          icon
          color="primary"
          @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-breadcrumbs exact></v-breadcrumbs>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="d-flex justify-center align-center">
        <nuxt />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import LoadingDialog from '../component/loading/LoadingDialog.vue'
export default {
  components: { LoadingDialog },
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '통계페이지',
          to: '/'
        },
        {
          icon: 'mdi-cog',
          title: '프로필',
          to: '/profile'
        },
        {
          icon: 'mdi-broadcast',
          title: '게시글 목록',
          to: '/board'
        },
        {
          icon: 'mdi-store-check',
          title: '글쓰기',
          to: '/createBoard'
        },
        {
          icon: 'mdi-store-check',
          title: '카테고리',
          to: '/category'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '나의 블로그 어드민 페이지',
    }
  }
}
</script>
