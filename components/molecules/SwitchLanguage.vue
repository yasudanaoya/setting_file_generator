<template lang="pug">
  .switch-language
    button(
      @click.self="onClick"
    )
      | {{ $t("commons.buttons.translations") }}

    .language-list(
      v-if="isShow"
    )
      .language-item(
        v-for="language in languages"
      )
        nuxt-link(:to="switchLocalePath(language.lang)")
          | {{ language.name }}
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      languages: [
        { lang: "ja", name: "Japanese" },
        { lang: "en", name: "English" }
      ]
    };
  },

  methods: {
    onClick() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
