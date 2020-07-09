<template lang="pug">
  modal.json-code-modal(
    name="json-code-modal"
    height="auto"
    adaptive
  )
    settings-json

    .modal-footer-btns
      button.dialog-btn(@click="closeModal")
        | {{ $t("common.button.close") }}
      button.dialog-btn(
        v-clipboard:copy="json"
        v-clipboard:success="onSuccess"
      ) {{ $t("common.button.copy") }}
</template>

<script>
import SettingsJson from "../SettingsJson";
export default {
  components: {
    SettingsJson
  },

  data() {
    return {
      json: null
    };
  },

  mounted() {
    this.json = this.$store.state.settings.settingsJson;
    this.json = JSON.stringify(this.json, null, 2);
  },

  methods: {
    closeModal() {
      this.$modal.hide("json-code-modal");
    },

    onSuccess() {
      const option = {
        position: "top-center",
        duration: 3000,
        type: "success",
        iconPack: "fontawesome",
        icon: "check"
      };
      const message = this.$t("common.messages.toast.success");

      this.$toast.show(message, option);
    }
  }
};
</script>
