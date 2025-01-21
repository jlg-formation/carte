export const useMapDisplayClipboard = () => {
  const { gps, isMenuVisible } = useMapDisplayState();

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
