<template lang="pug">
  tr
    td
    td
      input(
        v-if="isCheckbox"
        type="checkbox"
        :value="ability.value"
        @change="onChange"
      )
      input(
        v-else-if="isNumber"
        type="number"
        :value="ability.value"
        @change="onChange"
      )
    td {{ getDescription }}

</template>

<script>
export default {
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
    isCheckbox() {
      return this.ability.type === "checkbox";
    },
    isNumber() {
      return this.ability.type === "number";
    },
    getDescription() {
      const key = "ability.desc." + this.ability.key;
      return this.$t(key);
    }
  },

  methods: {
    onChange(e) {
      // e.target.value
    }
  }
};
</script>
