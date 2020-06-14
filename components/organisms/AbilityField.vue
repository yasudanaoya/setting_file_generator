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
        :index="index"
        :checkedVal="checkedVal"
        @on-change="onChange"
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

  data() {
    return {
      checkedVal: []
    };
  },

  created() {
    this.abilities = this.getAbilities();
  },

  methods: {
    onChange() {
      this.$emit("on-change");
    }
  }
};
</script>
