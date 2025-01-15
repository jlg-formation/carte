const anonymousPageList = ["/login", "/", "/legal"];
export default defineNuxtRouteMiddleware((to, from) => {
  if (anonymousPageList.includes(to.fullPath)) {
    return;
  }

  const authenticationStore = useAuthenticationStore();
  if (authenticationStore.user === undefined) {
    const { afterLoginRoute } = storeToRefs(authenticationStore);
    afterLoginRoute.value = to.fullPath;
    return navigateTo("/login");
  }
});
