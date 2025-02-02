export default function useNewAccount() {
  const userStore = useUserStore();
  const router = useRouter();

  const email = ref("");
  const newPassword = ref("");
  const lastname = ref("");
  const firstname = ref("");

  const isCreating = ref(false);

  const isFormValid = computed(() => {
    return (
      email.value !== "" &&
      newPassword.value !== "" &&
      lastname.value !== "" &&
      firstname.value !== ""
    );
  });

  const handleSubmit = async () => {
    try {
      console.log("submit");
      isCreating.value = true;
      await userStore.create({
        email: email.value,
        password: newPassword.value,
        lastname: lastname.value,
        firstname: firstname.value,
      });
      await router.push("/account-created");
    } catch (err) {
      console.log("err: ", err);
    } finally {
      isCreating.value = false;
    }
  };
  return {
    email,
    newPassword,
    lastname,
    firstname,
    isFormValid,
    isCreating,
    handleSubmit,
  };
}
