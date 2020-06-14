<template lang="pug">
  .page-top
    ability-field(
      @on-change="onChange"
    )
    settings-json(
      ref="settings"
    )
</template>

<script>
import AbilityField from "../components/organisms/AbilityField";
import SettingsJson from "../components/organisms/SettingsJson";

export default {
  components: {
    AbilityField,
    SettingsJson
  },

  methods: {
    onChange() {
      this.$refs.settings.reRender();
    }
  }
};
</script>
