const anonymousPageList = ["/login", "/", "/legal", "/new-account"];
export default defineNuxtRouteMiddleware(async (to) => {
  if (isSSR()) {
    return;
  }
  if (anonymousPageList.includes(to.fullPath)) {
    return;
  }

  const authenticationStore = useAuthenticationStore();
  // let the time localforage load data
  await sleep(500);

  if (authenticationStore.user === undefined) {
    const { afterLoginRoute } = storeToRefs(authenticationStore);
    afterLoginRoute.value = to.fullPath;
    return navigateTo("/login");
  }
});
