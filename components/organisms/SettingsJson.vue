<template lang="pug">
  .settings-json(v-if="renderComponent")
    pre(class="language-json")
      code
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
  },

  methods: {
    reRender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    }
  }
};
</script>
