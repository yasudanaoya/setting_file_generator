<template lang="pug">
  .ability-field
    table
      .table-header
      tr
        th
        th
      ability-row(
        v-for="(ability, index) in abilities"
        :key="index"
        :ability="ability"
      )
</template>

<script>
import AbilityRow from "../molecules/AbilityRow";
import abilityList from "@/assets/mixins/ability-list.js";

export default {
  components: {
    AbilityRow
  },

  mixins: [abilityList],

  created() {
    this.abilities = this.getAbilities();
  }
};
</script>
