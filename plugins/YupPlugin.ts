import { setLocale } from "yup";

export default defineNuxtPlugin(() => {
  console.log("yup init");
  setLocale({
    mixed: {
      default: "Champ non valide.",
      required: "Champ obligatoire",
    },
    string: {
      email: "Email non valide.",
    },
  });
});
