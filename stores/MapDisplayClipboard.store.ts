import { defineStore } from "pinia";

export const useMapDisplayClipboardStore = defineStore(
  "mapDisplayClipboard",
  () => {
    const { gps, isMenuVisible } = storeToRefs(useMapDisplayStore());

    const copyGpsCoord = () => {
      isMenuVisible.value = false;
      navigator.clipboard.writeText(
        gps.value.latitude + ", " + gps.value.longitude,
      );
    };

    return {
      copyGpsCoord,
    };
  },
);
