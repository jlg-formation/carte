<script setup lang="ts">
const { x, y } = useMouse();

// x.value = 0;

const menuStyle = computed(() => {
  const width = window.innerWidth;
  const menuWidth = 240;
  const left = x.value + menuWidth > width ? x.value - menuWidth : x.value;

  const result = {
    left: `${left}px`,
    top: `calc(${y.value}px - 3rem)`,
  };
  return result;
});
</script>

<template>
  <ul
    class="menu menu-vertical absolute z-[9999] w-60 rounded-box bg-base-100"
    :style="menuStyle"
  >
    <MapBlocMenuSelected />
    <MapBlocMenuNormal />
  </ul>
</template>
