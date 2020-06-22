<template lang="pug">
  .header
    .header-left
      p Title

    .header-right
      switch-language
</template>

<script>
import SwitchLanguage from "../molecules/SwitchLanguage";

export default {
  components: { SwitchLanguage }
};
</script>
