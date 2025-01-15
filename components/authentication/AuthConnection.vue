<script setup>
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/vue/24/solid";

const route = useRoute();
console.log("route: ", route);

const isLoginPage = computed(() => route.name === "login");

const authenticationStore = useAuthenticationStore();

const { user } = storeToRefs(authenticationStore);

const isDisconnecting = ref(false);

const handleLogout = async () => {
  try {
    console.log("logout");
    isDisconnecting.value = true;
    await authenticationStore.logout();
  } catch (err) {
  } finally {
    isDisconnecting.value = false;
  }
};
</script>

<template>
  <template v-if="!isLoginPage">
    <NuxtLink
      v-if="user === undefined"
      to="/login"
      class="btn btn-neutral btn-sm mx-2 rounded-full"
    >
      <ArrowRightEndOnRectangleIcon class="size-6" />
      <span>Connexion</span>
    </NuxtLink>
    <details v-else class="dropdown dropdown-end mx-2">
      <summary class="btn btn-sm m-1">{{ user.displayName }}</summary>
      <ul
        class="dropdown-content z-[1] flex w-52 flex-col items-center gap-10 rounded-box bg-base-100 p-2 shadow"
      >
        <li>{{ user.email }}</li>
        <li>
          <button class="btn" @click="handleLogout" :disabled="isDisconnecting">
            <span :class="isDisconnecting && 'loading loading-spinner'">
              <ArrowRightStartOnRectangleIcon class="size-6" />
            </span>
            <span>Se déconnecter</span>
          </button>
        </li>
      </ul>
    </details>
  </template>
</template>
