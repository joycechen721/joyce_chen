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

Each stop needs map coordinates, a zoom level, the copy for its panel, and its highlights. Set `timeOfDay` to `"morning"`, `"afternoon"`, or `"evening"` for a new trip instead of relying on the legacy emoji fallback.

For a custom trip experience, keep its page-specific content (such as food cards and recommendations) in the same trip `data.ts`, then pass it into the shared experience component from that route's `page.tsx`. The original Japan itinerary is retained at `/travel/backlog/japan` while the active Japan experience lives at `/travel/japan`.
