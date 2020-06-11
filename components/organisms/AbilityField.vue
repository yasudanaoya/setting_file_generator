<template lang="pug">
  .ability-field
    table
      .table-header
      tr
        th
        th
      ability-row(
        v-for="(ability, index) in abilities"
        :ability="ability"
        :index="index"
        :checkedVal="checkedVal"
      )
</template>

<script>
import AbilityRow from "../molecules/AbilityRow";

export default {
  components: {
    AbilityRow
  },

  data() {
    return {
      checkedVal: [],
      abilities: [
        {
          value: false,
          type: "checkbox",
          kind: "whiteSpace"
        }
      ]
    };
  }
};
</script>
