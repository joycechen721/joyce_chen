export type TravelTimeOfDay = "morning" | "afternoon" | "evening";

export type TravelImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TravelImageSet = TravelImage | readonly TravelImage[];

export type TravelStop = {
  id: number;
  day: string;
  date: string;
  city: string;
  place: string;
  lat: number;
  lng: number;
  zoom: number;
  emoji: string;
  title: string;
  description: string;
  highlights: string[];
  image: TravelImageSet;
  timeOfDay?: TravelTimeOfDay;
};

export type TravelReflectionCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type TravelFoodFavorite = {
  caption: string;
  border: string;
  fill: string;
  image: TravelImage;
  mapHref: string;
};

export type TravelRecommendation = {
  name: string;
  color: string;
  detail: string;
  mapHref: string;
  image: TravelImage;
};

export type TravelItineraryConfig = {
  id: string;
  title: string;
  nativeTitle?: string;
  dates: string;
  stops: TravelStop[];
  dayColors?: Record<string, string>;
};
