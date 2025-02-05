import { defineRule } from "vee-validate";

export default defineNuxtPlugin(() => {
  console.log("vee validate init");
  defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return "Champ obligatoire";
    }
    return true;
  });

  defineRule("email", (value: string) => {
    // Field is empty, should pass
    if (!value || !value.length) {
      return true;
    }
    // Check if email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return "Email non valide";
    }
    return true;
  });

  defineRule(
    "emailAlreadyTaken",
    debounceAsync(1000, async (value: string) => {
      console.log("async validation: ", value);
      const userStore = useUserStore();
      await userStore.wait();
      await sleep(1000);
      const isExistingEmail = userStore.users.find((u) =>
        value.startsWith(u.email),
      );
      console.log("isExistingEmail: ", isExistingEmail);
      if (isExistingEmail) {
        return "Mail déjà pris";
      }
      return true;
    }),
  );

  defineRule("passwordMatch", (value: string, [target]: [target: string]) => {
    if (value === target) {
      return true;
    }
    return "Les mots de passe doivent être identique";
  });
});
