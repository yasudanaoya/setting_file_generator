<template lang="pug">
  .header
    header-left

    header-right
</template>

<script>
import HeaderLeft from "../molecules/HeaderLeft";
import HeaderRight from "../molecules/HeaderRight";

export default {
  components: { HeaderLeft, HeaderRight }
};
</script>
