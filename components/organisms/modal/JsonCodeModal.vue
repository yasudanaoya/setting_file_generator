<template lang="pug">
  modal(name="json-code-modal")
    settings-json

    button(@click="closeModal") 閉じる
</template>

<script>
import SettingsJson from "../SettingsJson";
export default {
  components: {
    SettingsJson
  },

  methods: {
    closeModal() {
      this.$modal.hide("json-code-modal");
    }
  }
};
</script>
