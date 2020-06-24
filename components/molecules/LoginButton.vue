<template lang="pug">
  .login-button
    button(
      @click="login"
    ) ログイン
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith("auth0");
    }
  }
};
</script>
