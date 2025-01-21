import type { Place } from "~/interfaces/Place";

export const useMapDisplayHandlers = () => {
  const { gps, hoverPlace, isMenuVisible, isAdding, isUpdating, name } =
    useMapDisplayState();

  const placeStore = usePlaceStore();

  const removePlace = async (place: Place) => {
    console.log("removePlace");
    isMenuVisible.value = false;

    await placeStore.remove([place.id]);
    console.log("removed");
    hoverPlace.value = undefined;
  };

  const updatePlace = () => {
    isUpdating.value = true;
  };

  const updatePlace2 = async (menuPlace: Place) => {
    if (name.value === "") {
      return;
    }

    isMenuVisible.value = false;
    isUpdating.value = false;
    menuPlace.name = name.value;
    await placeStore.update(menuPlace);
    name.value = "";
  };

  const addPlace2 = async () => {
    if (name.value === "") {
      return;
    }
    isMenuVisible.value = false;
    isAdding.value = false;
    await placeStore.add({
      gps: { ...gps.value },
      name: name.value,
    });
    name.value = "";
  };

  const copyGpsCoord = () => {
    isMenuVisible.value = false;
    navigator.clipboard.writeText(
      gps.value.latitude + ", " + gps.value.longitude,
    );
  };

  const addPlace = () => {
    isAdding.value = true;
  };

  return {
    addPlace,
    copyGpsCoord,
    addPlace2,
    updatePlace,
    updatePlace2,
    removePlace,
  };
};
