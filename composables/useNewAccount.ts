import { useForm } from "vee-validate";
import { object, string, ref } from "yup";

interface NewAccountForm {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
  lastname: string;
  firstname: string;
}

export default function useNewAccount() {
  const schema = object({
    email: string().required().email(),
    newPassword: string().required(),
    confirmNewPassword: string()
      .oneOf([ref("newPassword")], "Les deux mots de passe ne sont pas égaux.")
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
      }
    },
  );

  return {
    errors,
    meta,
    isSubmitting,
    onSubmit,
    isFieldTouched,
  };
}
