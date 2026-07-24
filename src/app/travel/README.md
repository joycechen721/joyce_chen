# Adding a trip

1. Create `src/app/travel/<trip-slug>/data.ts` and export a `TravelItineraryConfig`.
2. Add the route page below and pass that config to the shared itinerary component.

```tsx
import Itinerary from "@/components/Itinerary";
import { trip } from "./data";

export default function Page() {
  return <Itinerary trip={trip} />;
}
```

Each stop needs map coordinates, a zoom level, the copy for its panel, and its highlights. Set `timeOfDay` to `"day"`, `"afternoon"`, or `"night"` for a new trip instead of relying on the legacy emoji fallback.
