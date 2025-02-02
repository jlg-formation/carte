import { defineStore } from "pinia";
import type { AuthenticatedUser } from "~/interfaces/User";

export const useAuthenticationStore = defineStore("authentication", () => {
  const user = ref<AuthenticatedUser | undefined>(undefined);
  const afterLoginRoute = ref("/");

  const displayName = computed({
    // getter
    get() {
      if (user.value === undefined) return;
      return user.value.firstname + " " + user.value.lastname;
    },
    // setter
    set(newValue) {
      console.log("setting the computed value");
      if (user.value === undefined) {
        return;
      }
      if (typeof newValue !== "string") {
        throw new Error("Invalid value  for displayName");
      }
      // Note: we are using destructuring assignment syntax here.
      [user.value.firstname, user.value.lastname] = newValue.split(" ");
    },
  });

  const login = async (email: string, password: string) => {
    await sleep(300);
    console.log("email: ", email);
    console.log("password: ", password);
    const userStore = useUserStore();
    const u = userStore.users.find((u) => u.email === email);
    if (
      u === undefined ||
      u.passwordDigest !== (await hashPassword({ email, password }))
    ) {
      throw new Error("Invalid email/password");
    }
    user.value = {
      firstname: u.firstname,
      lastname: u.lastname,
      email: u.email,
    };
    useRouter().replace(afterLoginRoute.value);
  };

  const logout = async () => {
    await sleep(1000);
    user.value = undefined;
    afterLoginRoute.value = "/";
    const router = useRouter();
    router.replace(afterLoginRoute.value);
  };

  const wait = async () => {
    const store = useAuthenticationStore();
    await waitUntilLoaded(store);
  };

  return { user, afterLoginRoute, displayName, login, logout, wait };
});
