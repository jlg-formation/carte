import { object, string, ref } from "yup";

export const newAccountFormSchema = () => {
  return object({
    email: string()
      .required()
      .email()
      .test(
        "mail-already-taken",
        "Mail déjà pris",
        debounceAsync(1000, async (value) => {
          console.log("async validation: ", value);
          const userStore = useUserStore();
          await userStore.wait();
          await sleep(1000);
          const isExistingEmail = userStore.users.find((u) =>
            value.startsWith(u.email),
          );
          console.log("isExistingEmail: ", isExistingEmail);
          return !isExistingEmail;
        }),
      ),
    newPassword: string().required(),
    confirmNewPassword: string()
      .oneOf([ref("newPassword")], "Les deux mots de passe ne sont pas égaux.")
      .required(),
    lastname: string().required(),
    firstname: string().required(),
  });
};
