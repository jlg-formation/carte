import { defineStore } from "pinia";
import type { NewPlace, Place } from "~/interfaces/Place";

export const usePlaceStore = defineStore("place", () => {
  const places = ref<Place[]>([]);

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
    foundPlace.name === place.name;
    foundPlace.gps === place.gps;
  };

  const exportJson = async () => {
    const filename = "places.json";
    const features = places.value.map((p) => {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [p.gps.longitude, p.gps.latitude],
        },
        properties: {
          name: p.name,
          id: p.id,
        },
      };
    });
    const geojson = {
      type: "FeatureCollection",
      features,
    };
    await saveFile("places.json", JSON.stringify(geojson, undefined, 2));
  };

  return { places, add, remove, update, exportJson };
});
