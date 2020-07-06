<template lang="pug">
  .page-top
    ability-field
    output-button

    json-code-modal
</template>

<script>
import OutputButton from "../components/atoms/OutputButton";
import AbilityField from "../components/organisms/AbilityField";
import JsonCodeModal from "../components/organisms/modal/JsonCodeModal";

export default {
  components: {
    OutputButton,
    AbilityField,
    JsonCodeModal
  }
};
</script>
