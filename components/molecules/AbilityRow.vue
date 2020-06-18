<template lang="pug">
  tr
    td
    td
      input(
        v-if="isCheckbox"
        type="checkbox"
        v-model="value"
        @change="onChange"
      )
      input(
        v-else-if="isNumber"
        type="number"
        v-model="value"
        @change="onChange"
        step="2"
      )
    td {{ getDescription }}

</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    ability: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      value: null
    };
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

  mounted() {
    this.value = this.ability.value;
  },

  methods: {
    ...mapMutations({
      changeSetting: "settings/changeSetting"
    }),
    onChange() {
      if (this.isNumber) this.value = Number(this.value);
      const param = {
        key: this.ability.key,
        value: this.value
      };
      this.changeSetting(param);
      this.$emit("on-change");
    }
  }
};
</script>
