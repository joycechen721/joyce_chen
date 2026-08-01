import JapanWheelExperience from "@/components/travel/JapanWheelExperience";
import { japanFavoriteEats, japanRecommendations, japanTrip } from "./data";

export default function JapanPage() {
  return (
    <JapanWheelExperience
      trip={japanTrip}
      favoriteEats={japanFavoriteEats}
      recommendations={japanRecommendations}
    />
  );
}
