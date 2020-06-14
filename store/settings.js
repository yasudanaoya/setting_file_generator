export const state = () => ({
  settingsJson: {
    "files.trimTrailingWhitespace": true,
    "editor.tabSize": 2
  },
  settingsList: ["trimWhiteSpace", "tabSize"]
});

export const mutations = {
  changeSetting(state, param) {
    const index = state.settingsList.indexOf(param.key);
    state.settingsJson[Object.keys(state.settingsJson)[index]] = param.value;
  }
};
