export default {
  methods: {
    getAbilities() {
      return [
        {
          key: "trimWhiteSpace",
          value: true,
          type: "checkbox"
        },
        {
          key: "tabSize",
          value: 2,
          type: "number"
        }
      ];
    }
  }
};
