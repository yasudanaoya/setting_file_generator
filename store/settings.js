export const state = () => ({
  settingsJson: {
    "files.trimTrailingWhitespace": true,
    "editor.tabSize": 2,
    "editor.dragAndDrop": false,
    "editor.minimap.enabled": false,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true
  },
  settingsList: [
    "trimWhiteSpace",
    "tabSize",
    "DnD",
    "minimap",
    "insertNewLine",
    "trimFinalLines"
  ]
});

export const mutations = {
  changeSetting(state, param) {
    const index = state.settingsList.indexOf(param.key);
    state.settingsJson[Object.keys(state.settingsJson)[index]] = param.value;
  }
};
