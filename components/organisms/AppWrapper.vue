<template lang="pug">
  .app-wrapper
    ability-field
    output-button
</template>

<script>
import OutputButton from "../atoms/OutputButton";
import AbilityField from "./AbilityField";

export default {
  components: {
    OutputButton,
    AbilityField
  }
};
</script>
