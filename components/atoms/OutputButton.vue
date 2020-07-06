<template lang="pug">
  button(@click="onClick")
    | {{ $t("common.button.generate") }}
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$modal.show("json-code-modal");
    }
  }
};
</script>
