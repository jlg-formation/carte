import { useMapDisplayStore } from "~/stores/MapDisplay.store";

export const useMapDisplayClipboard = () => {
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
};
