import type { Place } from "~/interfaces/Place";

const selectedPlace = ref<Place | undefined>(undefined);

export const useMapDisplay = () => {
  return { selectedPlace };
};
