import { defineStore } from "pinia";
import type { NewPlace, Place } from "~/interfaces/Place";

export const usePlaceStore = defineStore("place", () => {
  const places = ref<Place[]>([]);

  const add = async (place: NewPlace) => {
    await sleep(300);
    places.value.push({ ...place, id: crypto.randomUUID() });
  };

  const remove = async (ids: string[]) => {
    await sleep(300);
    console.log("places.value: ", places.value);
    places.value = places.value.filter((p) => !ids.includes(p.id));
    console.log("places.value: ", places.value);
  };

  return { places, add, remove };
});
