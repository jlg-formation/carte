import type { SubmissionHandler } from "vee-validate";

interface NewAccountForm {
  email: string;
  newPassword: string;
  lastname: string;
  firstname: string;
}

export default function useNewAccount() {
  const userStore = useUserStore();
  const router = useRouter();

  const isCreating = ref(false);

  const isFormValid = computed(() => {
    return true;
  });

  const handleSubmit = (async ({
    email,
    firstname,
    lastname,
    newPassword,
  }: NewAccountForm) => {
    try {
      console.log("submit", email, newPassword, lastname, firstname);
      isCreating.value = true;

      await userStore.create({
        email,
        password: newPassword,
        lastname,
        firstname,
      });
      await router.push("/account-created");
    } catch (err) {
      console.log("err: ", err);
    } finally {
      isCreating.value = false;
    }
  }) as unknown as SubmissionHandler;

  return {
    isFormValid,
    isCreating,
    handleSubmit,
  };
}
