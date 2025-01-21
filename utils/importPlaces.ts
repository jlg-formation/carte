import type { Place } from "~/interfaces/Place";

export const importPlaces = async (): Promise<Place[]> => {
  const jsonContent = await readFile("application/json");
  return JSON.parse(jsonContent).features.map(
    (f: GeoJSON.Feature<GeoJSON.Point>) => {
      return {
        id: f.properties?.id,
        name: f.properties?.name,
        gps: {
          longitude: f.geometry.coordinates[0],
          latitude: f.geometry.coordinates[1],
        },
      } satisfies Place;
    },
  );
};
