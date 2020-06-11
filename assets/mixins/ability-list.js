export default {
  methods: {
    getAbilities() {
      return [
        {
          key: "whiteSpace",
          value: false,
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
