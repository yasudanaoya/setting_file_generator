<template lang="pug">
  .page-top
    app-wrapper

    json-code-modal
</template>

<script>
import AppWrapper from "../components/organisms/AppWrapper";
import JsonCodeModal from "../components/organisms/modal/JsonCodeModal";

export default {
  components: {
    AppWrapper,
    JsonCodeModal
  }
};
</script>
