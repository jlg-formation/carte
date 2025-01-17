import type { GPS } from "./GPS";

export interface Place {
  id: string;
  gps: GPS;
  name: string;
}

export type NewPlace = Omit<Place, "id">;
