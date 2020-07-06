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

<style lang="scss">
.switch-language {
  button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;

    &::after {
      display: inline-block;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
  }

  .language-list {
    font-size: 1rem;
    color: #212529;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    z-index: 1000;

    .language-item {
      display: block;
      padding: 0.25rem 1.5rem;
      clear: both;
      font-weight: 400;
      text-align: inherit;
      white-space: nowrap;
      border: 0;

      &:hover {
        background-color: #f8f9fa;
      }
    }
  }

  /* translate fade (top to down) */
  .translate-fade-down-enter-active,
  .translate-fade-down-leave-active {
    transition: all 250ms;
    transition-timing-function: cubic-bezier(0.53, 2, 0.36, 0.85);
  }

  .translate-fade-down-enter,
  .translate-fade-down-leave-active {
    opacity: 0;
  }

  .translate-fade-down-enter,
  .translate-fade-down-leave-to {
    position: absolute;
  }

  .translate-fade-down-enter {
    transform: translateY(-10px);
  }

  .translate-fade-down-leave-active {
    transform: translateY(10px);
  }
}
</style>
