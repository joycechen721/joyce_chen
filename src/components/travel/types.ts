export type TravelTimeOfDay = "day" | "afternoon" | "night";

export type TravelStop = {
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
  timeOfDay?: TravelTimeOfDay;
};

export type TravelReflectionCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type TravelItineraryConfig = {
  id: string;
  title: string;
  nativeTitle?: string;
  dates: string;
  intro: string;
  heroCharacter?: string;
  accentColor?: string;
  stops: TravelStop[];
  afterRoute: {
    eyebrow: string;
    title: string;
    description: string;
    cards: TravelReflectionCard[];
  };
  dayColors?: Record<string, string>;
};
