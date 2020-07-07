<template lang="pug">
  .title-logo
    span {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "My Editune"
    }
  }
};
</script>
