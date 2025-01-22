import { defineStore } from "pinia";
import { ref } from "vue";
import type { GPS } from "~/interfaces/GPS";
import type { Place } from "~/interfaces/Place";
import type { Point } from "~/interfaces/Point";

export const useMapDisplayStore = defineStore("mapDisplay", () => {
  const hoverPlace = ref<Place | undefined>(undefined);
  const selectedPlace = ref<Place | undefined>(undefined);
  const mouse = ref<Point>({ x: 0, y: 0 });
  const gps = ref<GPS>({
    latitude: 0,
    longitude: 0,
  });
  const isMenuVisible = ref(false);
  const isAdding = ref(false);
  const isUpdating = ref(false);
  const name = ref("");

  const menuStyle = computed(() => {
    const width = window.innerWidth;
    const menuWidth = 240;
    const left =
      mouse.value.x + menuWidth > width
        ? mouse.value.x - menuWidth
        : mouse.value.x;

    const result = {
      left: `${left}px`,
      top: `calc(${mouse.value.y}px - 3rem)`,
    };
    return result;
  });

  const gpsCoord = computed(() => {
    return (
      gps.value.latitude.toFixed(5) + ", " + gps.value.longitude.toFixed(5)
    );
  });

  return {
    hoverPlace,
    selectedPlace,
    mouse,
    gps,
    menuStyle,
    gpsCoord,
    isMenuVisible,
    isAdding,
    isUpdating,
    name,
  };
});
