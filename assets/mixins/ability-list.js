export default {
  methods: {
    getAbilities() {
      return [
        {
          key: "trimWhiteSpace",
          value: true,
          type: "boolean"
        },
        {
          key: "tabSize",
          value: 2,
          type: "number"
        },
        {
          key: "DnD",
          value: false,
          type: "boolean"
        },
        {
          key: "minimap",
          value: false,
          type: "boolean"
        },
        {
          key: "insertNewLine",
          value: true,
          type: "boolean"
        },
        {
          key: "trimFinalLines",
          value: true,
          type: "boolean"
        }
      ];
    }
  }
};
