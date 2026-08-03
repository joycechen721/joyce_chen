import JapanWheel from "@/components/travel/JapanWheel";
import { japanFavoriteEats, japanRecommendations, japanTrip } from "./data";

export default function JapanPage() {
  return (
    <JapanWheel
      trip={japanTrip}
      favoriteEats={japanFavoriteEats}
      recommendations={japanRecommendations}
    />
  );
}
