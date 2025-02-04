import { defineStore } from "pinia";
import type { NewPlace, Place } from "~/interfaces/Place";

export const usePlaceStore = defineStore("place", () => {
  const places = ref<Place[]>([]);
  const selectedPlaceId = ref<string | undefined>(undefined);
  const panToSelectedPlaceLastDate = ref(new Date());

  const selectedPlace = computed(() => {
    return places.value.find((p) => p.id === selectedPlaceId.value);
  });

  const select = (id: string) => {
    if (selectedPlaceId.value === id) {
      selectedPlaceId.value = undefined;
      return;
    }
    selectedPlaceId.value = id;
  };

  const add = async (place: NewPlace) => {
    await sleep(10);
    places.value.push({ ...place, id: crypto.randomUUID() });
  };

  const remove = async (ids: string[]) => {
    await sleep(10);
    console.log("places.value: ", places.value);
    places.value = places.value.filter((p) => !ids.includes(p.id));
    console.log("places.value: ", places.value);
  };

  const update = async (place: Place) => {
    await sleep(10);
    const foundPlace = places.value.find((p) => p.id === place.id);
    if (foundPlace === undefined) {
      return;
    }
    foundPlace.name = place.name;
    foundPlace.gps = place.gps;
  };

  const exportJson = async () => {
    await exportPlaces(places.value);
  };

  const importJson = async () => {
    places.value = await importPlaces();
  };

  return {
    places,
    add,
    remove,
    update,
    exportJson,
    importJson,
    select,
    selectedPlaceId,
    panToSelectedPlaceLastDate,
    selectedPlace,
  };
});
