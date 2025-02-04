import { defineStore } from "pinia";
import { ref } from "vue";
import type { GPS } from "~/interfaces/GPS";
import type { Place } from "~/interfaces/Place";

export const useMapDisplayStore = defineStore("mapDisplay", () => {
  const hoverPlace = ref<Place | undefined>(undefined);
  const lastHoveredPlace = ref<Place | undefined>(undefined);
  const gps = ref<GPS>({
    latitude: 0,
    longitude: 0,
  });
  const isMenuVisible = ref(false);
  const isAdding = ref(false);
  const isUpdating = ref(false);
  const name = ref("");
  const isInvalid = ref(false);
  const isPending = ref(false);

  const debounced = debounce(300, async (newName: string) => {
    console.log("start validation", newName);
    await sleep(300);
    isInvalid.value = ["bad", "terrible"].includes(newName);
    isPending.value = false;
    console.log("end validation", newName);
  });

  watch(name, (newName: string) => {
    isPending.value = true;
    debounced(newName);
  });

  const gpsCoord = computed(() => {
    return (
      gps.value.latitude.toFixed(5) + ", " + gps.value.longitude.toFixed(5)
    );
  });

  return {
    hoverPlace,
    lastHoveredPlace,
    gps,
    gpsCoord,
    isMenuVisible,
    isAdding,
    isUpdating,
    name,
    isInvalid,
    isPending,
  };
});
