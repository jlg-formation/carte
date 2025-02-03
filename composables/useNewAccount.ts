import { useForm } from "vee-validate";
import type { NewAccountForm } from "~/interfaces/NewAccountForm";

export default function useNewAccount() {
  const errorMsg = ref("");
  const schema = newAccountFormSchema();
  const { isSubmitting, errors, meta, handleSubmit, isFieldTouched } =
    useForm<NewAccountForm>({ validationSchema: schema });

  const onSubmit = handleSubmit(
    async ({ email, firstname, lastname, newPassword }) => {
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
