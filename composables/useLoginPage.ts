import { useForm } from "vee-validate";
import { object, string } from "yup";

interface LoginForm {
  email: string;
  password: string;
}

export default function useLoginPage() {
  const errorMsg = ref("");
  const schema = object({
    email: string().required().email(),
    password: string().required(),
  });

  const authenticationStore = useAuthenticationStore();
  const isConnecting = ref(false);

  const { handleSubmit, errors, defineField, meta } = useForm<LoginForm>({
    validationSchema: schema,
  });
  const [email, emailAttrs] = defineField("email");

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      errorMsg.value = "";
      console.log("submit");
      isConnecting.value = true;
      await authenticationStore.login(email, password);
    } catch (err) {
      console.log("err: ", err);
      errorMsg.value = "Login / Mot de passe invalide.";
    } finally {
      isConnecting.value = false;
    }
  });

  return {
    onSubmit,
    errors,
    meta,
    email,
    emailAttrs,
    isConnecting,
    errorMsg,
  };
}
