import { defineStore } from "pinia";
import type { User } from "~/interfaces/User";

export const useAuthenticationStore = defineStore("authentication", () => {
  const user = ref<User | undefined>(undefined);

  const login = async (email: string, password: string) => {
    await sleep(1000);
    console.log("email: ", email);
    console.log("password: ", password);
    user.value = {
      displayName: "Jean-Louis GUENEGO",
      email,
    };
  };

  const logout = async () => {
    await sleep(1000);
    user.value = undefined;
  };
  return { user, login, logout };
});
