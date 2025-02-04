<template>
  <div class="flex h-full min-h-0 flex-grow flex-col gap-2 pt-4">
    <MapBlocButtons />

    <div
      id="map-manager-list"
      class="flex h-full min-h-0 flex-grow flex-col gap-2 overflow-y-auto scrollbar-hide"
    >
      <MapBlocPlaceList />
    </div>
  </div>
</template>
