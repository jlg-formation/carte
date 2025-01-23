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
  const isInvalid = ref(false);

  watch(name, async (newName) => {
    await sleep(2000);
    isInvalid.value = ["bad", "terrible"].includes(newName);
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
