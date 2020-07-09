<template lang="pug">
  .switch-language
    dropdown-menu(
      v-model="isShow"
      transition="translate-fade-down"
      ref="dropdown"
    )
      span.language-toggle.app-btn(
        :class="{'is-active': isShow }"
      )
        | {{ $t("common.button.translations") }}

      .language-list(slot="dropdown")
        .language-item(
          v-for="language in languages"
        )
          nuxt-link(:to="switchLocalePath(language.lang)")
            div(@click="onClickLink") {{ language.name }}
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      languages: [
        { lang: "ja", name: "日本語" },
        { lang: "en", name: "English" }
      ]
    };
  },

  methods: {
    onClickLink() {
      this.isShow = false;
    }
  }
};
</script>
