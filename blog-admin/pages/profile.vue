<template>
  <div>
    <profile />
    <config />
  </div>
</template>

<script>
import Profile from '../component/profile/profile';
import Config from '../component/config/config';

export default {
  components: {Profile, Config},
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('members/logout')
    }
  }
};
</script>

<style scoped>

</style>