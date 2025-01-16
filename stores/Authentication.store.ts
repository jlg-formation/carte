import { defineStore } from "pinia";
import type { User } from "~/interfaces/User";

export const useAuthenticationStore = defineStore("authentication", () => {
  const user = ref<User | undefined>(undefined);
  const afterLoginRoute = ref("/");

  const login = async (email: string, password: string) => {
    await sleep(300);
    console.log("email: ", email);
    console.log("password: ", password);
    user.value = {
      displayName: "Jean-Louis GUENEGO",
      email,
    };

    const router = useRouter();
    router.replace(afterLoginRoute.value);
  };

  const logout = async () => {
    await sleep(1000);
    user.value = undefined;
    afterLoginRoute.value = "/";
    const router = useRouter();
    router.replace(afterLoginRoute.value);
  };
  return { user, afterLoginRoute, login, logout };
});
