<script setup lang="ts">
import { ChevronRightIcon, XMarkIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <main class="relative -z-10 flex flex-grow">
    <div class="drawer">
      <input id="daisyui-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label
          for="daisyui-drawer"
          class="btn btn-circle drawer-button absolute z-[9999] m-2 bg-base-100 shadow-md"
        >
          <ChevronRightIcon class="size-6" />
        </label>
        <MapDisplay />
      </div>
      <div class="drawer-side z-[9999]">
        <label
          for="daisyui-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <div class="flex h-full w-72 flex-col">
          <label for="daisyui-drawer" class="drawer-button flex h-12"> </label>
          <div class="flex flex-grow flex-col bg-base-100 p-2">
            <label
              for="daisyui-drawer"
              class="btn btn-circle drawer-button bg-base-100 shadow-md"
            >
              <XMarkIcon class="size-6" />
            </label>
            <div class="flex-grow">
              <MapManager />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
