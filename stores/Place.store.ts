import { defineStore } from "pinia";
import type { Place } from "~/interfaces/Place";

export const usePlaceStore = defineStore("place", () => {
  const places = ref<Place[]>([]);

  const add = async (place: Place) => {
    await sleep(300);
    places.value.push(place);
  };

  return { places, add };
});
