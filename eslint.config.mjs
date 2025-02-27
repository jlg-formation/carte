// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(eslintConfigPrettier, {
  rules: {
    "max-lines": ["error", { max: 65 }],
    "vue/attribute-hyphenation": "off",
  },
});
