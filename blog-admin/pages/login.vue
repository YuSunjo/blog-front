<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../component/login/LoginForm';
export default {
  middleware: 'anonymous',
  layout: 'blank',
  components: {LoginForm},
};
</script>

<style scoped>

</style>