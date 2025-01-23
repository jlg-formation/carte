import { defineStore } from "pinia";
import { ref } from "vue";
import type { GPS } from "~/interfaces/GPS";
import type { Place } from "~/interfaces/Place";

export const useMapDisplayStore = defineStore("mapDisplay", () => {
  const hoverPlace = ref<Place | undefined>(undefined);
  const selectedPlace = ref<Place | undefined>(undefined);
  const gps = ref<GPS>({
    latitude: 0,
    longitude: 0,
  });
  const isMenuVisible = ref(false);
  const isAdding = ref(false);
  const isUpdating = ref(false);
  const name = ref("");
  const isInvalid = computed(() => {
    return ["bad", "verybad"].includes(name.value);
  });

  const gpsCoord = computed(() => {
    return (
      gps.value.latitude.toFixed(5) + ", " + gps.value.longitude.toFixed(5)
    );
  });

  return {
    hoverPlace,
    selectedPlace,
    gps,
    gpsCoord,
    isMenuVisible,
    isAdding,
    isUpdating,
    name,
    isInvalid,
  };
});
