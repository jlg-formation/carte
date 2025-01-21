import type { Place } from "~/interfaces/Place";

const hoverPlace = ref<Place | undefined>(undefined);
const selectedPlace = ref<Place | undefined>(undefined);

export const useMapDisplay = () => {
  return { hoverPlace, selectedPlace };
};
