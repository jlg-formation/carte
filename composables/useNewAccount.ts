import { useForm } from "vee-validate";
import { object, string, ref as yupref } from "yup";

interface NewAccountForm {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
  lastname: string;
  firstname: string;
}

export default function useNewAccount() {
  const errorMsg = ref("");
  const schema = object({
    email: string()
      .required()
      .email()
      .test("mail-already-taken", "Mail déjà pris", async (value) => {
        const userStore = useUserStore();
        await userStore.wait();
        await sleep(1000);
        const isExistingEmail = userStore.users.find((u) =>
          value.startsWith(u.email),
        );
        return !isExistingEmail;
      }),
    newPassword: string().required(),
    confirmNewPassword: string()
      .oneOf(
        [yupref("newPassword")],
        "Les deux mots de passe ne sont pas égaux.",
      )
      .required(),
    lastname: string().required(),
    firstname: string().required(),
  });
  const { isSubmitting, errors, meta, handleSubmit, isFieldTouched } =
    useForm<NewAccountForm>({
      validationSchema: schema,
    });

  const onSubmit = handleSubmit(
    async ({ email, firstname, lastname, newPassword }: NewAccountForm) => {
      try {
        console.log("submit", email, newPassword, lastname, firstname);

        errorMsg.value = "";

        const userStore = useUserStore();
        await userStore.wait();
        await userStore.create({
          email,
          password: newPassword,
          lastname,
          firstname,
        });
        await useRouter().push("/account-created");
      } catch (err) {
        console.log("err: ", err);
        errorMsg.value = "Email déjà pris.";
      }
    },
  );

  return {
    errors,
    meta,
    isSubmitting,
    onSubmit,
    isFieldTouched,
    errorMsg,
  };
}
