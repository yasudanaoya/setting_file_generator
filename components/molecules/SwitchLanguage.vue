<template lang="pug">
  .switch-language
    dropdown-menu(
      v-model="isShow"
      transition="translate-fade-down"
    )
      button {{ $t("common.button.translations") }}

      .language-list(slot="dropdown")
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
  }
};
</script>
