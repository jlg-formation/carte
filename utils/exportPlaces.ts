import type { Place } from "~/interfaces/Place";

export const exportPlaces = async (places: Place[]) => {
  const features = places.map((p) => {
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
