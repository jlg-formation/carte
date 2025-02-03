import { setLocale } from "yup";

export default function yupInit() {
  setLocale({
    mixed: {
      default: "Champ non valide.",
      required: "Champ obligatoire",
    },
    string: {
      email: "Email non valide.",
    },
  });
}
