<template lang="pug">
  tr
    td
    td
      input(
        type="checkbox"
        @change="onChange"
      )
    td {{ getDescription }}

</template>

<script>
import abilityList from "@/assets/mixins/ability-list";

export default {
  mixins: [abilityList],

  props: {
    ability: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    checkedVal: {
      type: Array,
      required: true
    }
  },
  computed: {
    getDescription() {
      return this.getAbilities().find(value => value.key === this.ability.kind)
        .desc;
    }
  },

  methods: {
    onChange() {}
  }
};
</script>
