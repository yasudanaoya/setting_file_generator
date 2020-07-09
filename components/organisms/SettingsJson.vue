<template lang="pug">
  .settings-json(v-if="renderComponent")
    pre(data-label="settings.json")
      code(class="language-json line-numbers code-toolbar")
        | {{ settingsJson }}
</template>

<script>
import Prism from "~/plugins/prism.js";

export default {
  data() {
    return {
      renderComponent: true
    };
  },
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
