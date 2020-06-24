<template lang="pug">
  .header
    .header-left
      p Title

    .header-right
      switch-language
      login-button
</template>

<script>
import SwitchLanguage from "../molecules/SwitchLanguage";
import LoginButton from "../molecules/LoginButton";

export default {
  components: { SwitchLanguage, LoginButton }
};
</script>
