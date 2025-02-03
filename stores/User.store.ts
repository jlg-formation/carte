import { defineStore } from "pinia";
import type { NewUser, User } from "~/interfaces/User";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  const create = async (user: NewUser) => {
    await sleep(300);
    const isExistingEmail = users.value.find((u) =>
      user.email.startsWith(u.email),
    );
    if (isExistingEmail) {
      throw new Error("existing email.");
    }
    users.value.push({
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      passwordDigest: await hashPassword(user),
    });

    const authenticationStore = useAuthenticationStore();
    authenticationStore.afterLoginRoute = "/account-created";
    await authenticationStore.login(user.email, user.password);
  };

  const wait = async () => {
    const store = useUserStore();
    await waitUntilLoaded(store);
  };

  return { users, create, wait };
});
