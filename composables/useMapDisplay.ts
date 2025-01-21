import type { Place } from "~/interfaces/Place";
import type { Point } from "~/interfaces/Point";

const hoverPlace = ref<Place | undefined>(undefined);
const selectedPlace = ref<Place | undefined>(undefined);
const mouse = ref<Point>({ x: 0, y: 0 });

export const useMapDisplay = () => {
  return { hoverPlace, selectedPlace, mouse };
};
