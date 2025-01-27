<script setup lang="ts">
const theme = ref("light");

provide("theme", theme);

const setTheme = (value: string) => {
  window.document.documentElement.setAttribute("data-theme", value);
};

watch(theme, () => {
  setTheme(theme.value);
});

onMounted(() => {
  setTheme(theme.value);
});
</script>

<template>
  <div class="relative z-0 flex min-h-screen flex-col justify-between">
    <HeaderLayout class="relative z-0" />
    <slot />
    <FooterLayout class="relative z-0" />
  </div>
</template>
