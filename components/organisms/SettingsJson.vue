<template lang="pug">
  .settings-json
    pre
      code(class="lang-json")
        | {{ settingsJson }}
</template>

<script>
import Prism from "~/plugins/prism.js";

export default {
  computed: {
    settingsJson() {
      return this.$store.state.settings.settingsJson;
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
