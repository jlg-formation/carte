<template>
  <div class="flex h-full min-h-0 flex-grow flex-col gap-2 pt-4">
    <MapBlocButtons />

    <div
      class="scrollbar-hide flex h-full min-h-0 flex-grow flex-col gap-2 overflow-y-auto"
    >
      <MapBlocPlaceList />
    </div>
  </div>
</template>
