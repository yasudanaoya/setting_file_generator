import { mount } from "@vue/test-utils";
import VueI18n from "vue-i18n";
import Vue from "vue";
import AbilityRow from "@/components/molecules/AbilityRow.vue";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en"
});

describe("AbilityRow.vue", () => {
  describe("Props", () => {
    describe("when ability type is checkbox", () => {
      const wrapper = mount(AbilityRow, {
        propsData: {
          ability: {
            key: "trimWhiteSpace",
            value: true,
            type: "checkbox"
          }
        },
        i18n
      });
      it("should check box is displayed ", () => {
        expect(wrapper.find("input").exists()).toBeTruthy();
        expect(wrapper.find("input").attributes().type).toBe("checkbox");
      });
    });

    describe("when ability type is number", () => {
      const wrapper = mount(AbilityRow, {
        propsData: {
          ability: {
            key: "trimWhiteSpace",
            value: true,
            type: "number"
          }
        },
        i18n
      });
      it("should check box is displayed ", () => {
        expect(wrapper.find("input").exists()).toBeTruthy();
        expect(wrapper.find("input").attributes().type).toBe("number");
      });
    });
  });
});
