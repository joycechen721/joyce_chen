import type {
  TravelFoodFavorite,
  TravelImage,
  TravelImageSet,
  TravelItineraryConfig,
  TravelHighlight,
  TravelRecommendation,
  TravelStop,
} from "@/components/travel/types";

const stopDetails = [
  {
    id: 1,
    day: "Day 1 🌙",
    date: "March 23",
    city: "Tokyo",
    place: "Jimbocho",
    lat: 35.6959,
    lng: 139.7577,
    zoom: 15,
    emoji: "📚",
    title: "book town!",
    description:
      "landed in narita airport early evening~ we set up ubigi esims, bought round-trip discounted train tickets (each 500 yen), and headed to jimbocho, a smoll book town in central tokyo. stayed in a double room at sakura hotel, a hostel that's popular with young foreign travellers like us! jimbocho is full of cute secondhand bookshops so we wandered around for a bit and got some snacks and supa delicious corn tea drinks from the iconic vending machines. zzzzz.",
    highlights: ["Secondhand bookshops", "Sanseido Books", "Late-night ramen"],
  },
  {
    id: 2,
    day: "Day 2 ☀️",
    date: "March 24",
    city: "Tokyo",
    place: "Chuo",
    lat: 35.66,
    lng: 139.762,
    zoom: 16,
    emoji: "🍣",
    title: "tsukiji fish market",
    description:
      "woke up at 6AM to subway to tsukiji fish market (best time to go is 7-10AM), which used to be the biggest seafood market in the world :0 had some yummy 9AM sushi breakfast there with some matcha. things of note at the market: expensive wagyu skewers, viral egg rolls, cutesy ceramic shops, and lots of fresh fish.",
    highlights: ["Hamarikyu Gardens", "Nakajima no Ochaya teahouse", "Tidal duck ponds", "Views of Tokyo Bay"],
  },
  {
    id: 3,
    day: "Day 2 ☀️",
    date: "March 24",
    city: "Tokyo",
    place: "Chuo",
    lat: 35.66,
    lng: 139.762,
    zoom: 16,
    emoji: "🍵",
    title: "hamarikyo gardens",
    description:
      "bellies and hearts impossibly full, we walked over to hamarikyo gardens, a beautiful place smack in the middle of the city. we walked around the tidal duck ponds and had a supa zen matcha break at nakajima no ochaya teahouse. apparently the polite way to drink tea is to kneel on the tatami and sip from the cup using both hands.",
    highlights: ["Hamarikyu Gardens", "Nakajima no Ochaya teahouse", "Tidal duck ponds", "Views of Tokyo Bay"],
  },
  {
    id: 4,
    day: "Day 2 🌤️",
    date: "March 24",
    city: "Tokyo",
    place: "Ginza",
    lat: 35.671217,
    lng: 139.765007,
    zoom: 16,
    emoji: "🛍️",
    title: "ginza shopping",
    description:
      "after a busy morning we decided to take it chill and go window shopping in ginza, beelining thru the flagship uniqlo and muji, walking into random kawaii popups, ... truly a healing our inner child moment, letting the greatness of capitalism possess us for a good few hours, pretending to be rich trustfund babies strolling around their natural habitats. gucci smoochie <3",
    highlights: ["Ginza Six", "Itoya stationery store", "Chanel, Louis Vuitton flagships", "Ginza boulevard stroll"],
  },
  {
    id: 5,
    day: "Day 2 🌙",
    date: "March 24",
    city: "Tokyo",
    place: "Koto",
    lat: 35.6493,
    lng: 139.7897,
    zoom: 15,
    emoji: "🪐",
    title: "teamlabs",
    description:
      "TEAMLABSS!! we went to the planets (not borderless) location and the experience turned out as iconic as expected :D it felt really surreal as if we were walking through different universes, the projections on the walls and ceilings featured flying flowers and quirky colorful shapes, bringing out that whimsy in us :p rlly interactive too: we got to explore a room full of mirrors, walk through different floor textures and wade through water, climb swinging ladders, jump through small mushroom bumps on the ground like we're in mario world. the whole place was like a big playground, 10/10 would recommend.",
    highlights: ["teamLab Planets", "Wading water installation", "Infinite crystal world", "Floating flower garden"],
  },
  {
    id: 6,
    day: "Day 3 ☀️",
    date: "March 25",
    city: "Tokyo",
    place: "Shinjuku",
    lat: 35.6938,
    lng: 139.7034,
    zoom: 15,
    emoji: "🎋",
    title: "our name",
    description:
      "not about to leave japan without visiting the birthplace of unrealistic relationship expectations. your name is one of my favorite movies (howl's moving castle remains on TOP ^) so we had to recreate the staircase scene at the very place it was inspired by :) there's a small shrine at the top of the staircase where you can purchase good luck charms and hang a block of wood on the fence with your hopes and dreams written on it. we went pretty early in the morning like 8AM-ish so there weren't any tourists we had to fight against to get our pics taken ^_^",
    highlights: ["Suga Shrine (Your Name steps)", "Shinjuku Gyoen National Garden", "Early sakura blossoms", "French garden section"],
  },
  {
    id: 7,
    day: "Day 3 ☀️",
    date: "March 25",
    city: "Tokyo",
    place: "Shinjuku",
    lat: 35.6812,
    lng: 139.7671,
    zoom: 13,
    emoji: "🌷",
    title: "shinjuku national garden",
    description: "we randomly stumbled upon this gem and saw some rlly pretty cherry blossoms, a botanical garden with some exotic plants and flowers, and a lotta moms wheeling their babies around. it's a big peaceful public garden/park that you can walk around for at least an hour and even picnic on the grass in. the cherry blossoms were LIT but you have to come in season (march-april) to see them in full bloom. and beware of the menacing birds around... they shat on us...",
    highlights: ["Placeholder"],
  },
  {
    id: 8,
    day: "Day 3 🌤️",
    date: "March 25",
    city: "Tokyo",
    place: "Shinjuku",
    lat: 35.6812,
    lng: 139.7671,
    zoom: 13,
    emoji: "🐔",
    title: "shinjuku downtown",
    description: "we saw THE JJK KFC ft the goats gojo and geto. got the craziest best tasting soba at this hole in the wall restaurant. you know it boutta be good when you see corporate workers lining up for it; it's built for solo eaters who finish in 5-10 minutes and you just wait silently in line watching them eat. super goofy setup that you can't find in the states lol. also shinjuku downtown gotta be the most visually stimulating place i'd ever been up till that point - there were huge anime posters everywhere, my senses were literally getting pelted. we got the smiski sunday series and i got the kitty one and they glow in the dark (tears of joy).",
    highlights: ["Placeholder"],
  },
  {
    id: 9,
    day: "Day 3 🌤️",
    date: "March 25",
    city: "Tokyo",
    place: "Mitaka",
    lat: 35.6962,
    lng: 139.5703,
    zoom: 16,
    emoji: "🍃",
    title: "ghibli museum",
    description:
      "as a die-hard ghibli fan, i think i ascended to a higher dimension here. standing next to castle in the sky robot made me feel transported into the ghibli universe. we saw first-draft sketches and walked through lovely decorated rooms that showcased the history and context of select movies like kiki's delivery service and arriety. the whole museum felt like a warm hug, helping me rediscover the untainted joy i felt as a kid where the world felt magical and i a confident explorer of it. it definitely is a slow-burn attraction, just a quaint lil building with three floors and some cute exhibits, less interactive but nonetheless plenty of fun and whimsy.",
    highlights: ["Ghibli Museum", "Rooftop Laputa robot", "Exclusive short film", "Cat Bus room", "Mitaka forest walk"],
  },
  {
    id: 10,
    day: "Day 3 🌙",
    date: "March 25",
    city: "Tokyo",
    place: "Koenji",
    lat: 35.7056,
    lng: 139.6496,
    zoom: 16,
    emoji: "🎸",
    title: "koenji downtown",
    description:
      "hella underrated place ngl. this city had so much personality, complete with the niche streetwear stores, cottagecore cafes, vintage record shops, like it felt so full of LIFE! we sat inside a cafe to recharge and just vibed (which wasn't hard to do cause the whole place was a vibe). walked into some clothing stores but they were all designer and rlly expensive so we could only admire them :( this city felt like a low-key, down-to-earth version of shinjuku lol. we got some sashimi on a little bamboo boat that set sail on my taste buds.",
    highlights: ["Pure Love Shopping Street (Junjou Shotengai)", "Vintage clothing stores", "Secondhand record shops", "Jazz bars"],
  },
  {
    id: 11,
    day: "Day 4 ☀️",
    date: "March 26",
    city: "Kamakura",
    place: "Kanagawa",
    lat: 35.3192,
    lng: 139.5468,
    zoom: 16,
    emoji: "🌊",
    title: "seaside day trip",
    description:
      "no not the uc irvine seaside. this legit. kamakura is a lovely seaside town that requires a day trip, with attractions like the buddha, bamboo grove path, etc! my friends and i came here to get a rest day from city overstimulation. this happy friendly grandpa came up to us in front of the buddha, took my phone and started posing us in goofy ways so that's how we got this iconic pic. free will does work in different ways i hope i get to be as whimsy as him when i'm older. this city felt extremely soothing to walk around though you had to pay entrance fees for the temples and buddha.",
    highlights: ["Great Buddha (Kotoku-in)", "Daibutsu hiking trail", "Bamboo grove path", "Yuigahama Beach", "Hase-dera temple"],
  },
  {
    id: 12,
    day: "Day 4 🌤️",
    date: "March 26",
    city: "Kamakura",
    place: "Kanagawa",
    lat: 35.3192,
    lng: 139.5468,
    zoom: 13,
    emoji: "🚂",
    title: "enoshima railway",
    description: "this was definitely the highlight of our kamakura day trip. seeing the lightrail come into view from the distance under the sunset was breathtaking 🌅 the lightrail skates around the coastline so the views from out the windows were lovely. HOWEVER it was sooo unbelievably crowded. not exactly the most pleasant experience - i was struggling to breathe bc it was hot and the air reeked of body sweat lol. we got off at the kamakurakōkō-mae station to see the famous railroad crossing featured in slam dunk (there were sm people there taking pics and waiting for the train to pass by). overall highly recc going at sunset, very pretty!",
    highlights: ["Placeholder"],
  },
  {
    id: 13,
    day: "Day 4 🌙",
    date: "March 26",
    city: "Tokyo",
    place: "Shibuya",
    lat: 35.3192,
    lng: 139.5468,
    zoom: 13,
    emoji: "✨",
    title: "night shibuya",
    description: "we took the magnetic bullet train back to shibuya n' got yummy omurice that split open so beautifully 🥹 then we explored the 9-story record tower and some CDs. from ghibli soundtracks to kpop, they really sell all kinds of music, also CDs preserve music with higher quality so the strat is to buy CDs there and then a cheap record player from akhihabara!! lots of color and vibrance but shinjuku still tops the overstimulation list.",
    highlights: ["Placeholder"],
  },
  {
    id: 14,
    day: "Day 5 ☀️",
    date: "March 27",
    city: "Tokyo",
    place: "Shinjuku",
    lat: 35.6812,
    lng: 139.7671,
    zoom: 13,
    emoji: "🏙️",
    title: "city sightseeing",
    description: "highly reccommend going up to the 45th floor of the metropolitan government building if you wanna get a good panoramic view of tokyo - it's FREE unlike other places like skytree for the same view lol. there are separate north/south sides you can go up of but they're equally great. on the viewing floor, you walk next to the windows and make a full circle round. there's a souvenir shop and a cafe up there too :p also the views come with labels so you know what buildings/landmarks you're looking at. def worth it!",
    highlights: ["Metropolitan Government Building"],
  },
  {
    id: 15,
    day: "Day 5 🌤️",
    date: "March 27",
    city: "Tokyo",
    place: "Shibuya",
    lat: 35.6812,
    lng: 139.7671,
    zoom: 13,
    emoji: "👘",
    title: "harajuku",
    description: "..where fashion thrives and trends emerge from :p there were almost exclusively clothing and accessory shops and the occassional highly curated cafe here n' there. it was BUMBLING with people holy crowded. the fashion here can be hella niche and alternative... some stores were selling samurai and ninja outfits, others doll/lolita clothes, punk rock, emo... a lotta these clothes you gotta be either straight up weird or hella courageous to wear out 😭",
    highlights: ["takeshita street"],
  },
  {
    id: 16,
    day: "Day 5 🌙",
    date: "March 27",
    city: "Tokyo",
    place: "Meguro",
    lat: 35.6984,
    lng: 139.773,
    zoom: 16,
    emoji: "🌸",
    title: "cherry blossoms",
    description:
      "there are cherry blossom festivals everywhere in japan in march/april! we went to the meguro river festival, where we saw sakura trees lining the river with pink lanterns and fairy lights connecting them to form a showstopping scene :p it was very very pretty!! there were food stalls everywhere selling takoyaki, these things 🍡, small bites, ... meow meow meow.",
    highlights: ["Meguro River"],
  },
  {
    id: 17,
    day: "Day 6 ☀️",
    date: "March 28",
    city: "Itō",
    place: "Izu",
    lat: 34.9769,
    lng: 138.9468,
    zoom: 13,
    emoji: "🚄",
    title: "high speed rail!",
    description: "woke up early to catch the high speed rail to izu and spend a night at an onsen hotel~ these trains are INSANELY FAST, like i thought six flags roller coasters were going at the speed of light but this gotta be some typa dark magic. it felt as though u could be blown off the platform if u stood a lil too close to the train coming in. also the sound is crazy loud it just NYOOOOMS and suddenly it's gone.",
    highlights: ["Placeholder"],
  },
  {
    id: 18,
    day: "Day 6 🌙",
    date: "March 28",
    city: "Itō",
    place: "Izu",
    lat: 34.9769,
    lng: 138.9468,
    zoom: 16,
    emoji: "♨️",
    title: "onsen getaway",
    description:
      "stayed at the shirakabe ryokan (~$150 usd a night) and it was incredible 🎶 we had to change into traditional japanese gowns and sandals in the hotel (it's literally just a robe and ur naked underneath) and we stayed in tatami rooms. we got to strip and relax in the stone onsens the hotel provided - they were outdoors but the water was heated and everything was rlly clean. there's also a mini library u can read in + they gave us the heartiest dinner and breakfast (sooo many side dishes + mini hotpot to yourself + fresh wasabi for u to grate)! i felt... TRANSFORMED.",
    highlights: ["Rotenburo outdoor onsen", "Ryokan stay", "Kaiseki multi-course dinner", "Izu Peninsula scenery", "Yukata and geta"],
  },
  {
    id: 19,
    day: "Day 7 🌤️",
    date: "March 29",
    city: "Kyoto",
    place: "Shimogyo Ward",
    lat: 34.9977,
    lng: 135.7547,
    zoom: 16,
    emoji: "🍢",
    title: "kyotoooo",
    description:
      "spent most of the day taking the train to...KYOTO!! checked into colours (airbnb), then walked around the neighboring areas and shopping centers. kyoto felt way calmer than tokyo by the many people leisurely biking on the streets, the tree-lined blocks, the slow paced vibezz. our airbnb had traditional elements, ie. sleeping on a tatami, hard wood floors, potted plants everywhere, stone pebble flooring in the common areas, making us feel more connected to the culture.",
    highlights: ["Colours Guesthouse", "Nishiki Market", "Tamagoyaki skewers", "Evening food stall crawl", "Kyoto arrival"],
  },
  {
    id: 20,
    day: "Day 8 ☀️",
    date: "March 30",
    city: "Kyoto",
    place: "Sakyo Ward",
    lat: 35.0369,
    lng: 135.7801,
    zoom: 16,
    emoji: "🎏",
    title: "nishiki market",
    description:
      "apparently this is viewed as a tourist trap but i thought it was decent! lots of yummy local bites: mini octopus, candied fruits, tempura, udon noodle stalls, cream puffs.. also there's a culture in japan that discourages ppl from eating while walking so there are tables and benches around for u to finish eating at one booth before moving onto the next (culture shock!). come with an empty belly.",
    highlights: ["Philosopher's Path", "Ginkaku-ji (Silver Pavilion)", "Nanzen-ji aqueduct", "Fushimi Inari torii gates", "Summit hike at dusk"],
  },
  {
    id: 24,
    day: "Day 8 🌤️",
    date: "March 30",
    city: "Kyoto",
    place: "Sakyo Ward",
    lat: 35.0369,
    lng: 135.7801,
    zoom: 16,
    emoji: "🗿",
    title: "philosopher's path",
    description: "continuing the culture-maxxing saga in kyoto, we walked along this hiking trail called the philosopher's path. it follows a canal that's lined with sakura trees and cute vintage shops. legend has it that ancient philosophers would come here to cook up great ideas. it's a quick 20-minute path and at the end of it is this area with many historic temples, the big famous one being Honen-in. we checked out a smaller temple and it had a pretty garden, tatami rooms, and holy water fountains u cleanse urself with.",
    highlights: ["placeholder"],
  },
  {
    id: 25,
    day: "Day 8 🌙",
    date: "March 30",
    city: "Kyoto",
    place: "Fushimi Ward",
    lat: 34.9671,
    lng: 135.7727,
    zoom: 16,
    emoji: "⛩️",
    title: "fushimi inari",
    description: "the iconic gatesss need i say more. each gate is branded with the name of its donor and the date they donated - any random person can donate one i think LOL. this place was just a long circular hiking trail of gates one after the other... it actually stretches out to be pretty long, where completing it could take hours. we walked a little and turned back when we reached this nice scenic area, as did many ppl there :p come at sunset for some incredible pictures!",
    highlights: ["placeholder"],
  },
  {
    id: 21,
    day: "Day 9 ☀️",
    date: "March 31",
    city: "Nara",
    place: "Nara Park",
    lat: 34.6851,
    lng: 135.843,
    zoom: 16,
    emoji: "🦌",
    title: "DEER!",
    description:
      "nara deer park. the deer actually do bow at you to ask for food 😭 you go up to a booth nearby and buy a pack of deer crackers, then walk to the main park to feed the deer. i lowkey felt bad for the deer ;-; the grass patches looked dead and there were SO MANY deer clustered in the park, which wasn't even that big... also the baby deer get pushed by the bigger deer when fighting for crackers. some of them can be pretty aggressive (esp the male ones with horns) so sometimes just give the cracker and run for ur life :D very surreal... even tho u can't really pet them it's fun to bow back and forth with them lol.",
    highlights: ["Nara sika deer", "Todai-ji Great Buddha hall", "Kasuga Taisha shrine", "Deer cracker vendors", "Nara Park stroll"],
  },
  {
    id: 22,
    day: "Day 9 🌤️",
    date: "March 31",
    city: "Kyoto",
    place: "Uji",
    lat: 34.8904,
    lng: 135.8032,
    zoom: 16,
    emoji: "🍵",
    title: "matcha village",
    description:
      "do not leave kyoto without visiting uji and buying some matcha to bring back home. this place is like the birthplace of matcha. matcha this matcha that, this whole town is made up of stores that either sell matcha or matcha drinks or matcha-made food. all top grade matcha too :D we tried matcha parfaits here, bought wooden matcha whisks + matcha powder, ate some matcha dumplings and ice cream.. larper or true enjoyer, u have to come here. like i personally can't taste the diff between regular vs high grade matcha, but i still enjoyed uji as i got to try many unique variations of matcha desserts.",
    highlights: ["Byodoin temple (10-yen coin)", "Matcha soft serve", "Uji River promenade", "Uji Bridge", "Matcha tea shops"],
  },
  {
    id: 23,
    day: "Day 10 ☀️",
    date: "April 1",
    city: "Tokyo",
    place: "Ginza",
    lat: 35.681236,
    lng: 139.767125,
    zoom: 16,
    emoji: "✍️",
    title: "last day",
    description:
      "imma be honest nest hotel yaesu is NOT it... the room was so tiny yet so $$$. we train-ed back from kyoto to tokyo for our final night in japan - we checked out the famous itoya tower (it had everythinggg stationery related, for pretty cheap too), shopped for some souvenirs in ginza, walked around the underground mall cause it was raining.. i tried a strawberry jam bagel from city bakery and it was SOOO good i woke up at 5AM the next day to buy four of them fresh to eat back in the states 💀",
    highlights: ["Depachika souvenir shopping", "Final Tokyo coffee", "Ginza department stores", "Narita Express farewell"],
  },
];

const catGlassesImage = {
  src: "/images/japan/optimized/cat_glasses.webp",
  alt: "Cat wearing glasses",
  caption: "cat in glasses",
} satisfies TravelImage;

const foodImages = {
  udon: { src: "/images/japan/optimized/food/1_udon.webp", alt: "Bowl of udon", caption: "udon" },
  tempura: { src: "/images/japan/optimized/food/2_tempura.webp", alt: "Tempura", caption: "tempura" },
  matcha: { src: "/images/japan/optimized/food/3_matcha.webp", alt: "Matcha drink", caption: "matcha" },
  okonomiyaki: { src: "/images/japan/optimized/food/4_okonomiyaki.webp", alt: "Okonomiyaki", caption: "okonomiyaki" },
  sandwich: { src: "/images/japan/optimized/food/5_sandwich.webp", alt: "Sandwich", caption: "sandwich" },
  gyudon: { src: "/images/japan/optimized/food/6_gyudon.webp", alt: "Gyudon bowl", caption: "gyudon" },
  moreUdon: { src: "/images/japan/optimized/food/7_udon.webp", alt: "Another bowl of udon", caption: "more udon" },
  bagels: { src: "/images/japan/optimized/food/8_bagels.webp", alt: "Bagels", caption: "bagels" },
} satisfies Record<string, TravelImage>;

const googleMapsSearch = (query: string) => (
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
);

const landmark = (label: string, query = label): TravelHighlight => ({
  label,
  mapHref: googleMapsSearch(query),
});

const japanStopHighlights: Record<number, TravelHighlight[]> = {
  1: [
    landmark("Jimbocho book town", "Jimbocho, Tokyo, Japan"),
    landmark("Sakura Hotel Jimbocho", "Sakura Hotel Jimbocho, Tokyo, Japan"),
    landmark("Sanseido Books", "Sanseido Books Jimbocho, Tokyo, Japan"),
  ],
  2: [
    landmark("Tsukiji Outer Market", "Tsukiji Outer Market, Tokyo, Japan"),
    landmark("Tsukiji Uogashi", "Tsukiji Uogashi, Tokyo, Japan"),
    landmark("Tsukiji sushi breakfast", "Tsukiji sushi, Tokyo, Japan"),
  ],
  3: [
    landmark("Hamarikyu Gardens", "Hamarikyu Gardens, Tokyo, Japan"),
    landmark("Nakajima no Ochaya", "Nakajima no Ochaya, Tokyo, Japan"),
    landmark("Tokyo Bay", "Tokyo Bay, Tokyo, Japan"),
  ],
  4: [
    landmark("Ginza Six", "Ginza Six, Tokyo, Japan"),
    landmark("UNIQLO Ginza", "UNIQLO Ginza, Tokyo, Japan"),
    landmark("MUJI Ginza", "MUJI Ginza, Tokyo, Japan"),
  ],
  5: [
    landmark("teamLab Planets", "teamLab Planets TOKYO DMM, Tokyo, Japan"),
    landmark("Toyosu", "Toyosu, Tokyo, Japan"),
  ],
  6: [
    landmark("Suga Shrine", "Suga Shrine, Yotsuya, Tokyo, Japan"),
    landmark("Your Name stairs", "Suga Shrine stairs, Yotsuya, Tokyo, Japan"),
  ],
  7: [
    landmark("Shinjuku Gyoen National Garden", "Shinjuku Gyoen National Garden, Tokyo, Japan"),
    landmark("Shinjuku Gyoen Greenhouse", "Shinjuku Gyoen Greenhouse, Tokyo, Japan"),
    landmark("Shinjuku sakura", "Shinjuku Gyoen cherry blossoms, Tokyo, Japan"),
  ],
  8: [
    landmark("Shinjuku", "Shinjuku, Tokyo, Japan"),
    landmark("KFC Shinjuku", "KFC Shinjuku, Tokyo, Japan"),
    landmark("Shinjuku Station", "Shinjuku Station, Tokyo, Japan"),
  ],
  9: [
    landmark("Ghibli Museum", "Ghibli Museum, Mitaka, Japan"),
    landmark("Mitaka", "Mitaka, Tokyo, Japan"),
  ],
  10: [
    landmark("Koenji", "Koenji, Tokyo, Japan"),
    landmark("Koenji Junjo Shotengai", "Koenji Junjo Shotengai, Tokyo, Japan"),
    landmark("Koenji vintage shops", "Koenji vintage shops, Tokyo, Japan"),
  ],
  11: [
    landmark("Great Buddha of Kamakura", "Kotoku-in, Kamakura, Japan"),
    landmark("Hase-dera", "Hase-dera, Kamakura, Japan"),
    landmark("Yuigahama Beach", "Yuigahama Beach, Kamakura, Japan"),
  ],
  12: [
    landmark("Enoshima Electric Railway", "Enoshima Electric Railway, Kamakura, Japan"),
    landmark("Kamakurakokomae Station", "Kamakurakokomae Station, Kamakura, Japan"),
    landmark("Slam Dunk crossing", "Kamakurakokomae railroad crossing, Kamakura, Japan"),
  ],
  13: [
    landmark("Shibuya", "Shibuya, Tokyo, Japan"),
    landmark("Tower Records Shibuya", "Tower Records Shibuya, Tokyo, Japan"),
    landmark("Shibuya Station", "Shibuya Station, Tokyo, Japan"),
  ],
  14: [
    landmark("Tokyo Metropolitan Government Building", "Tokyo Metropolitan Government Building, Tokyo, Japan"),
    landmark("North Observatory", "Tokyo Metropolitan Government Building North Observatory, Tokyo, Japan"),
    landmark("South Observatory", "Tokyo Metropolitan Government Building South Observatory, Tokyo, Japan"),
  ],
  15: [
    landmark("Takeshita Street", "Takeshita Street, Harajuku, Tokyo, Japan"),
    landmark("Harajuku", "Harajuku, Tokyo, Japan"),
    landmark("Cat Street", "Cat Street, Harajuku, Tokyo, Japan"),
  ],
  16: [
    landmark("Meguro River", "Meguro River, Tokyo, Japan"),
    landmark("Nakameguro", "Nakameguro, Tokyo, Japan"),
    landmark("Meguro River Sakura Festival", "Meguro River Sakura Festival, Tokyo, Japan"),
  ],
  17: [
    landmark("Tokyo Station", "Tokyo Station, Tokyo, Japan"),
    landmark("Tokaido Shinkansen", "Tokaido Shinkansen, Tokyo Station, Japan"),
    landmark("Ito Station", "Ito Station, Shizuoka, Japan"),
  ],
  18: [
    landmark("Shirakabe Ryokan", "Shirakabe Ryokan, Izu, Japan"),
    landmark("Izu onsen", "Izu onsen, Shizuoka, Japan"),
    landmark("Izu Peninsula", "Izu Peninsula, Shizuoka, Japan"),
  ],
  19: [
    landmark("Colours Guesthouse", "Colours Guesthouse Kyoto, Japan"),
    landmark("Kyoto Station", "Kyoto Station, Kyoto, Japan"),
    landmark("Nishiki Market", "Nishiki Market, Kyoto, Japan"),
  ],
  20: [
    landmark("Nishiki Market", "Nishiki Market, Kyoto, Japan"),
    landmark("Nishiki Tenmangu Shrine", "Nishiki Tenmangu Shrine, Kyoto, Japan"),
    landmark("Nishiki Market food stalls", "Nishiki Market food stalls, Kyoto, Japan"),
  ],
  21: [
    landmark("Nara Park", "Nara Park, Nara, Japan"),
    landmark("Nara deer park", "Nara Deer Park, Nara, Japan"),
    landmark("Todai-ji", "Todai-ji, Nara, Japan"),
  ],
  22: [
    landmark("Uji", "Uji, Kyoto, Japan"),
    landmark("Byodoin Temple", "Byodoin Temple, Uji, Japan"),
    landmark("Nakamura Tokichi Honten", "Nakamura Tokichi Honten, Uji, Japan"),
  ],
  23: [
    landmark("Nest Hotel Tokyo Yaesu", "Nest Hotel Tokyo Yaesu, Tokyo, Japan"),
    landmark("Itoya Ginza", "Itoya Ginza, Tokyo, Japan"),
    landmark("The City Bakery Ginza", "The City Bakery Ginza, Tokyo, Japan"),
  ],
  24: [
    landmark("Philosopher's Path", "Philosopher's Path, Kyoto, Japan"),
    landmark("Honen-in", "Honen-in, Kyoto, Japan"),
    landmark("Ginkaku-ji", "Ginkaku-ji, Kyoto, Japan"),
  ],
  25: [
    landmark("Fushimi Inari Taisha", "Fushimi Inari Taisha, Kyoto, Japan"),
    landmark("Senbon Torii", "Senbon Torii, Fushimi Inari, Kyoto, Japan"),
    landmark("Fushimi Inari hiking trail", "Fushimi Inari hiking trail, Kyoto, Japan"),
  ],
};

const imageCaptionPlaceholders: Record<string, readonly string[]> = {
  "day1-evening": [
    "sakura hotel (hostel w/ free breakfast)",
  ],
  "day2-morning": [
    "fresh fishies in the market",
    "famous egg rolls aka tamagoyaki",
    "breakfast sashimi 😋",
  ],
  "day2-morning2": [
    "field of yellow weeds(?) flowers(?)",
    "nakajima no ochaya teahouse",
  ],
  "day2-afternoon": [
    "big toy store in ginza",
    "inside the big toy store in ginza",
    "flagship uniqlo",
    "picture sculpture thingy inside flagship muji",
    "chikawa popup store"
  ],
  "day2-night": [
    "blobs of light 😭",
    "a room with big balloon balls",
    "mushroom blobs on the floor u bounce on",
    "infinite mirror with blobs of light",
  ],
  "day3-morning": [
    "kimi no nawa it was difficult to stay in character ong",
    "kimi no nawa stairs",
    "kimi no nawa (suga) shrine gate"
  ],
  "day3-morning2": [
    "flowers in the botanical garden",
    "cherry blossom trees outside",
    "garden park",
    "v pretty flower outside",
    "more cherry blossoms"
  ],
  "day3-afternoon": [
    "shinjuku downtown",
    "smiski sunday series",
    "jjk kfc scene inspo",
    "hole in the wall soba shop"
  ],
  "day3-afternoon2": [
    "ghibli museum entrance",
    "castle in the sky robot",
    "patio of the museum building",
    "totoro as our receptionist",
    "meow the beautiful museum sign",
    "LEFT WITH THIS CUTIEEEEEEE"
  ],
  "day3-night": [
    "koenji downtown street",
    "aesthetic cutesy cafe",
    "sashimi boat for dinner",
  ],
  "day4-morning": [
    "hokokuji temple garden",
    "hokokuji temple bamboo grove",
    "yummy mochi stick from downtown 🍡",
    "great buddha statue, kotoku-in temple"
  ],
  "day4-afternoon": [
    "crossroad rails at kamakurakōkō-mae station (slam dunk ref)",
    "coastal light rail nyooming into station"
  ],
  "day4-night": [
    "shibuya night scene",
    "omurice in shibuya",
    "more shibuya night scene"
  ],
  "day5-morning": [
    "government building exterior",
    "45th viewing floor",
    "concerning amount of smoke in the distance!?"
  ],
  "day5-afternoon": [
    "harajuku entrance sign",
    "real-time video billboard screen",
    "main harajuku street - takeshita st."
  ],
  "day5-night": [
    "meguro river cherry blossom festival",
    "posing at the street mirror",
    "ending the day with some facial mask therapy"
  ],
  "day6-morning": [
    "friends on the high speed rail",
    "studio ghibli suing openai that day for their picture generation feature 💀",
    "view from the train window"
  ],
  "day6-night": [
    "shirakabe ryokan entrance",
    "tea table setup in our room",
    "yummy dinner after the onsen",
    "comfy tatami mat beds"
  ],
  "day7-afternoon": [
    "colours guesthouse entrance",
    "our tatami beds for 3 nights",
    "public areas of the guesthouse",
    "staying cultured in the bookstores 😗",
    "CUTE TOTORO PLUSHIE WE SAW",
    "downtown kyoto shenanigans"
  ],
  "day8-morning": [
    "nishiki market stalls",
    "nishiki market stall",
    "standing booths you can eat at",
    "lots of seafood stalls",
    "yummy mini octopus.. WOULD RECC"
  ],
  "day8-afternoon": [
    "random canal in kyoto",
    "canal led to a school-run cherry blossom festival",
    "cherry blossoms lining the streets of kyoto",
    "the start of philosophers path",
    "huge ceramic teacup in a shop along the path",
    "halfway thru philosohpers path",
    "random small temple we walked into at the end of the path",
    "temple gardens",
    "praying room in the temple",
    "tea room in the temple",
    "cute artsy flower store nearby",
    "sanmon gate, nanzen-ji temple",
    "an abandoned railroad nearby"
  ],
  "day8-night": [
    "the first fushimi inari gate",
    "walking down the hiking trail",
    "scenic park areas at the trail",
    "guardian dogs everywhere along the trail",
    "romon gate"
  ],
  "day9-morning": [
    "bananas being individually packaged here..",
    "arriving at nara park",
    "deer sleeping",
    "deer relaxing",
    "deer eating",
    "daibutsu-den hall, todai-ji temple"
  ],
  "day9-afternoon": [
    "entrance to tsujirihei honten, a historic matcha store",
    "walking around uji",
    "matcha from nakamura tokichi (everyone was buying from this place)",
    "i see my country",
    "matcha whisk street cones lol",
    "matcha flavored dumplings",
    "giant uji matcha pocky",
    "yummy curry katsu dinner"
  ],
  "day10-morning": [
    "our farewell notes in the colours guesthouse book",
    "cherry blossoms along the streets of tokyo",
    "itoya stationery tower pens",
    "pokemon dx center in tokyo"
  ],
};

const imageStackFromFolder = (folder: string, count: number, label: string): TravelImage[] => (
  Array.from({ length: count }, (_, index) => ({
    src: `/images/japan/optimized/${folder}/${index + 1}.webp`,
    alt: `${label}, photo ${index + 1}`,
    caption: imageCaptionPlaceholders[folder]?.[index] ?? `${label} — photo ${index + 1}`,
  }))
);

const japanStopImages: Record<number, TravelImageSet> = {
  1: imageStackFromFolder("day1-evening", 1, "jimbocho book town"),
  2: imageStackFromFolder("day2-morning", 3, "tsukiji fish market"),
  3: imageStackFromFolder("day2-morning2", 2, "hamarikyu gardens"),
  4: imageStackFromFolder("day2-afternoon", 5, "day 2 afternoon"),
  5: imageStackFromFolder("day2-night", 4, "day 2 night"),
  6: imageStackFromFolder("day3-morning", 3, "day 3 morning"),
  7: imageStackFromFolder("day3-morning2", 5, "day 3 morning 2"),
  8: imageStackFromFolder("day3-afternoon", 4, "shinjuku downtown"),
  9: imageStackFromFolder("day3-afternoon2", 6, "shinjuku downtown 2"),
  10: imageStackFromFolder("day3-night", 3, "day 3 night"),
  11: imageStackFromFolder("day4-morning", 4, "day 4 morning"),
  12: imageStackFromFolder("day4-afternoon", 2, "enoshima railway"),
  13: imageStackFromFolder("day4-night", 3, "night shibuya"),
  14: imageStackFromFolder("day5-morning", 3, "gvt metropolitan building"),
  15: imageStackFromFolder("day5-afternoon", 4, "harajuku"),
  16: imageStackFromFolder("day5-night", 3, "day 5 night"),
  17: imageStackFromFolder("day6-morning", 3, "high speed rail!"),
  18: imageStackFromFolder("day6-night", 4, "day 6 night"),
  19: imageStackFromFolder("day7-afternoon", 6, "day 7 afternoon"),
  20: imageStackFromFolder("day8-morning", 5, "day 8 morning"),
  21: imageStackFromFolder("day9-morning", 6, "day 9 morning"),
  22: imageStackFromFolder("day9-afternoon", 8, "day 9 afternoon"),
  23: imageStackFromFolder("day10-morning", 4, "day 10 morning"),
  24: imageStackFromFolder("day8-afternoon", 13, "day 8 afternoon"),
  25: imageStackFromFolder("day8-night", 5, "day 8 night"),
};

const stops: TravelStop[] = stopDetails.map((stop) => ({
  ...stop,
  highlights: japanStopHighlights[stop.id],
  image: japanStopImages[stop.id],
}));

export const japanFavoriteEats = [
  { caption: "tempura udon", border: "#ef6f6c", fill: "#ffe3c3", image: foodImages.udon, mapHref: "https://share.google/BXlgjUOMf59Bm3rUA" },
  { caption: "shrimp tempura + matcha salt", border: "#4ca8a6", fill: "#d8f2ef", image: foodImages.tempura, mapHref: "https://maps.app.goo.gl/4gg4UXsf5TnYfCKx9" },
  { caption: "matcha/hojicha parfaits", border: "#799a5a", fill: "#eaf3c8", image: foodImages.matcha, mapHref: "https://maps.app.goo.gl/eMd1Pziy3ftopf5XA" },
  { caption: "kyoto okonomiyaki", border: "#c57bb3", fill: "#fae0f3", image: foodImages.okonomiyaki, mapHref: "https://maps.app.goo.gl/QgUeEt2Y9gDMQwcC9" },
  { caption: "conbini fruit sandwiches", border: "#e1a53b", fill: "#fff0bd", image: foodImages.sandwich, mapHref: "https://maps.app.goo.gl/asy1qzJ4v5cdPfCQ7" },
  { caption: "yummy gyudon", border: "#ed7792", fill: "#ffe0e7", image: foodImages.gyudon, mapHref: "https://maps.app.goo.gl/mjyJ1tf8aiEPQFTL9" },
  { caption: "corporate soba", border: "#7f9bd1", fill: "#e0eaff", image: foodImages.moreUdon, mapHref: "https://maps.app.goo.gl/E96ei8jZsjeatxui6" },
  { caption: "strawberry bagels", border: "#d88957", fill: "#ffe2bd", image: foodImages.bagels, mapHref: "https://maps.app.goo.gl/aGea8TptVnsVE9sh6" },
] satisfies readonly TravelFoodFavorite[];

export const japanRecommendations = [
  { name: "placeholder", color: "#f2b45d", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#75b69e", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#d989a6", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#8674bd", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#d76758", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#93aa5c", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#6ba7c9", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#e6a33f", detail: "placeholder", mapHref: "/", image: catGlassesImage },
  { name: "placeholder", color: "#e26c47", detail: "placeholder", mapHref: "/", image: catGlassesImage },
] satisfies readonly TravelRecommendation[];

export const japanTrip = {
  id: "japan-2025",
  title: "Japan",
  nativeTitle: "日本",
  dates: "March 23 - April 2, 2025",
  stops,
} satisfies TravelItineraryConfig;
