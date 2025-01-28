import { defineStore } from "pinia";
import type { User } from "~/interfaces/User";

export const useAuthenticationStore = defineStore("authentication", () => {
  const user = ref<User | undefined>(undefined);
  const afterLoginRoute = ref("/");

  const displayName = computed({
    // getter
    get() {
      if (user.value === undefined) {
        return;
      }
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
    if (email !== "jlguenego@gmail.com") {
      throw new Error("Invalid email");
    }
    user.value = {
      firstname: "x",
      lastname: "y",
      email,
    };

    displayName.value = "Jean-Louis GUENEGO";

    const router = useRouter();
    router.replace(afterLoginRoute.value);
    console.log("user.value: ", user.value);
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
