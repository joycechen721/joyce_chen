"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import type { TravelItineraryConfig, TravelStop, TravelTimeOfDay } from "@/components/travel/types";

const DEFAULT_DAY_COLORS = ["#e4572e", "#2e86ab", "#2a9d8f", "#6a4c93", "#f4a261", "#e63946", "#457b9d", "#43aa8b", "#bc6c25", "#7b2cbf"];

const getDayKey = (dayLabel: string) => {
  const match = dayLabel.match(/^Day\s+\d+/i);
  return match ? match[0] : dayLabel;
};

const getDayColors = (stops: TravelStop[], configuredColors: Record<string, string> | undefined, accentColor: string) => {
  let colorIndex = 0;
  return stops.reduce<Record<string, string>>((colors, stop) => {
    const dayKey = getDayKey(stop.day);
    if (!colors[dayKey]) {
      colors[dayKey] = configuredColors?.[dayKey] ?? DEFAULT_DAY_COLORS[colorIndex] ?? accentColor;
      colorIndex += 1;
    }
    return colors;
  }, {});
};

const getTimeOfDay = (stop: TravelStop): TravelTimeOfDay => {
  if (stop.timeOfDay) return stop.timeOfDay;
  if (stop.day.includes("🌤️")) return "afternoon";
  if (stop.day.includes("🌙")) return "evening";
  return "morning";
};

const getTimeLabel = (timeOfDay: TravelTimeOfDay) => {
  if (timeOfDay === "afternoon") return "Afternoon";
  if (timeOfDay === "evening") return "Evening";
  return "Morning";
};

const getTimeIcon = (timeOfDay: TravelTimeOfDay) => {
  if (timeOfDay === "afternoon") return "🌤️";
  if (timeOfDay === "evening") return "🌙";
  return "☀️";
};

type HighlightImage = { src: string; alt: string };

const TILE_SUBDOMAINS = ["a", "b", "c", "d"];
const preloadedTileUrls = new Set<string>();

const getCartoTileUrl = (x: number, y: number, z: number) => {
  const subdomain = TILE_SUBDOMAINS[Math.abs(x + y) % TILE_SUBDOMAINS.length];
  const retinaSuffix = typeof window !== "undefined" && window.devicePixelRatio > 1 ? "@2x" : "";
  return `https://${subdomain}.basemaps.cartocdn.com/light_all/${z}/${x}/${y}${retinaSuffix}.png`;
};

const lngLatToTile = (lat: number, lng: number, zoom: number) => {
  const latRad = (lat * Math.PI) / 180;
  const scale = 2 ** zoom;
  return {
    x: Math.floor(((lng + 180) / 360) * scale),
    y: Math.floor(
      ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * scale
    ),
  };
};

const preloadTile = (url: string) => {
  if (preloadedTileUrls.has(url)) return;
  preloadedTileUrls.add(url);
  const img = new Image();
  img.decoding = "async";
  img.src = url;
};

const preloadStopTiles = (map: any, stops: TravelStop[]) => {
  const size = map.getSize();
  const tileSize = 256;
  const radiusX = Math.ceil(size.x / tileSize / 2) + 1;
  const radiusY = Math.ceil(size.y / tileSize / 2) + 1;

  stops.forEach((stop) => {
    const { x, y } = lngLatToTile(stop.lat, stop.lng, stop.zoom);
    for (let dx = -radiusX; dx <= radiusX; dx += 1) {
      for (let dy = -radiusY; dy <= radiusY; dy += 1) {
        preloadTile(getCartoTileUrl(x + dx, y + dy, stop.zoom));
      }
    }
  });
};

const buildPlaceholderImage = (
  stop: TravelStop,
  label: string,
  idx: number,
  color: string
) => {
  const text = label.trim() || `Highlight ${idx + 1}`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#1f2937" stop-opacity="0.88" />
        </linearGradient>
      </defs>
      <rect width="960" height="640" fill="url(#bg)" />
      <rect x="28" y="28" width="904" height="584" rx="24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
      <text x="60" y="120" fill="#ffffff" font-size="36" font-family="Helvetica, Arial, sans-serif" font-weight="700">${stop.place}</text>
      <text x="60" y="170" fill="rgba(255,255,255,0.85)" font-size="24" font-family="Helvetica, Arial, sans-serif">${stop.city}</text>
      <text x="60" y="528" fill="#ffffff" font-size="44" font-family="Helvetica, Arial, sans-serif" font-weight="700">${text}</text>
      <text x="60" y="574" fill="rgba(255,255,255,0.78)" font-size="20" font-family="Helvetica, Arial, sans-serif">Placeholder image • click to expand</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Itinerary({ trip }: { trip: TravelItineraryConfig }) {
  const stops = trip.stops;
  const accentColor = trip.accentColor ?? "#c0392b";
  const dayColors = useMemo(
    () => getDayColors(stops, trip.dayColors, accentColor),
    [accentColor, stops, trip.dayColors]
  );
  const getStopColor = useCallback(
    (stop: TravelStop) => dayColors[getDayKey(stop.day)] ?? accentColor,
    [accentColor, dayColors]
  );
  const mapRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null);
  const trailRef = useRef<any[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dialWrapRef = useRef<HTMLDivElement>(null);
  const prevStopRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const timelineDialIndexRef = useRef(0);
  const dialDragRef = useRef<number | null>(null);
  const dialHandleAngleRef = useRef(0);

  const [activeStop, setActiveStop] = useState(0);
  const [dialHandleAngle, setDialHandleAngle] = useState(0);
  const [mapReady, setMapReady] = useState(false);
  const [selectedHighlight, setSelectedHighlight] = useState<null | { images: HighlightImage[]; index: number }>(null);

  const createWalkerIcon = useCallback((L: any, color: string) => {
    return L.divIcon({
      className: "",
      html: `<div class="walker-marker">
        <div class="walker-pulse" style="background:${color}; opacity:0.25;"></div>
        <div class="walker-dot" style="border-color:${color}; color:${color};">🚶</div>
      </div>`,
      iconSize: [48, 48],
      iconAnchor: [24, 24],
    });
  }, []);

  // ── Animate map to a stop ────────────────────────────────────────────────────
  const animateToStop = useCallback(async (idx: number) => {
    if (!mapRef.current || !markerRef.current) return;
    if (isAnimatingRef.current) return;

    const L = leafletRef.current ?? (await import("leaflet")).default;
    leafletRef.current = L;
    const stop = stops[idx];
    const prev = stops[prevStopRef.current];
    const stopColor = getStopColor(stop);

    isAnimatingRef.current = true;

    // Draw dashed trail line between stops
    if (idx !== prevStopRef.current) {
      const line = L.polyline(
        [[prev.lat, prev.lng], [stop.lat, stop.lng]],
        { color: stopColor, weight: 2.5, opacity: 0.65, dashArray: "6 4" }
      ).addTo(mapRef.current);
      trailRef.current.push(line);
    }

    markerRef.current.setIcon(createWalkerIcon(L, stopColor));
    markerRef.current.setLatLng([stop.lat, stop.lng]);
    const jumpDistanceMeters = mapRef.current.distance(
      [prev.lat, prev.lng],
      [stop.lat, stop.lng]
    );

    mapRef.current.stop();
    if (jumpDistanceMeters > 80000) {
      mapRef.current.setView([stop.lat, stop.lng], stop.zoom, { animate: false });
    } else {
      mapRef.current.flyTo([stop.lat, stop.lng], stop.zoom, {
        duration: 0.8,
        easeLinearity: 0.35,
      });
    }

    prevStopRef.current = idx;
    setActiveStop(idx);
    setTimeout(() => { isAnimatingRef.current = false; }, 1500);
  }, [createWalkerIcon, getStopColor, stops]);

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    const init = async () => {
      const L = leafletRef.current ?? (await import("leaflet")).default;
      leafletRef.current = L;
      await import("leaflet/dist/leaflet.css");

      const first = stops[0];
      const firstStopColor = getStopColor(first);

      const map = L.map(mapContainerRef.current!, {
        center: [first.lat, first.lng],
        zoom: first.zoom,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 19,
          keepBuffer: 6,
          updateWhenIdle: true,
          updateWhenZooming: false,
        }
      ).addTo(map);

      const walkerIcon = createWalkerIcon(L, firstStopColor);

      const marker = L.marker([first.lat, first.lng], { icon: walkerIcon }).addTo(map);

      mapRef.current = map;
      markerRef.current = marker;
      setMapReady(true);

      const warmMapCache = () => preloadStopTiles(map, stops);
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(warmMapCache, { timeout: 2000 });
      } else {
        setTimeout(warmMapCache, 700);
      }
    };

    init();
    return () => { mapRef.current?.remove(); mapRef.current = null; };
  }, [createWalkerIcon, getStopColor, stops]);

  // ── Scroll → stop changes ────────────────────────────────────────────────────
  // Driven by the scrollContainerRef div's onScroll, NOT the page.
  // Ghost sections live behind the map (pointer-events:none) so they
  // never block map interactions at all.
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || !mapReady) return;
    const { scrollTop, clientHeight } = scrollContainerRef.current;
    const idx = Math.min(
      Math.floor((scrollTop + clientHeight * 0.45) / clientHeight),
      stops.length - 1
    );
    if (idx !== prevStopRef.current) animateToStop(idx);
  }, [mapReady, animateToStop, stops.length]);

  const scrollToStop = useCallback((idx: number) => {
    if (!scrollContainerRef.current) return;
    const clamped = Math.max(0, Math.min(idx, stops.length - 1));
    scrollContainerRef.current.scrollTo({
      top: clamped * scrollContainerRef.current.clientHeight,
      behavior: "smooth",
    });
    setActiveStop(clamped);
    if (clamped !== prevStopRef.current) animateToStop(clamped);
  }, [animateToStop, stops.length]);

  const activeTimeOfDay = getTimeOfDay(stops[activeStop]);

  useEffect(() => {
    timelineDialIndexRef.current = activeStop;
    if (dialDragRef.current !== null) return;

    const stepAngle = 360 / stops.length;
    const closestMatchingAngle = activeStop * stepAngle
      + 360 * Math.round((dialHandleAngleRef.current - activeStop * stepAngle) / 360);

    dialHandleAngleRef.current = closestMatchingAngle;
    setDialHandleAngle(closestMatchingAngle);
  }, [activeStop, stops.length]);

  const selectTimelineStop = useCallback((index: number) => {
    const normalizedIndex = ((index % stops.length) + stops.length) % stops.length;
    timelineDialIndexRef.current = normalizedIndex;
    scrollToStop(normalizedIndex);
  }, [scrollToStop, stops.length]);

  const moveDialHandle = useCallback((angle: number) => {
    dialHandleAngleRef.current = angle;
    setDialHandleAngle(angle);
  }, []);

  const selectRelativeStop = useCallback((direction: number) => {
    const nextAngle = dialHandleAngleRef.current + direction * (360 / stops.length);
    moveDialHandle(nextAngle);
    selectTimelineStop(Math.round(nextAngle / (360 / stops.length)));
  }, [moveDialHandle, selectTimelineStop, stops.length]);

  const getDialAngleFromPointer = useCallback((clientX: number, clientY: number) => {
    const dialBounds = dialWrapRef.current?.getBoundingClientRect();
    if (!dialBounds) return dialHandleAngleRef.current;

    const x = clientX - (dialBounds.left + dialBounds.width / 2);
    const y = clientY - (dialBounds.top + dialBounds.height / 2);
    const angleFromTop = (Math.atan2(y, x) * 180) / Math.PI + 90;
    const clockAngle = (angleFromTop + 360) % 360;

    return clockAngle + 360 * Math.round((dialHandleAngleRef.current - clockAngle) / 360);
  }, []);

  const handleDialPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dialDragRef.current = event.pointerId;
  }, []);

  const handleDialPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (dialDragRef.current !== event.pointerId) return;
    const nextAngle = getDialAngleFromPointer(event.clientX, event.clientY);
    const stepAngle = 360 / stops.length;
    const snappedAngle = Math.round(nextAngle / stepAngle) * stepAngle;
    moveDialHandle(snappedAngle);
    selectTimelineStop(Math.round(snappedAngle / stepAngle));
  }, [getDialAngleFromPointer, moveDialHandle, selectTimelineStop, stops.length]);

  const handleDialPointerEnd = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (dialDragRef.current !== event.pointerId) return;
    dialDragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

  const handleDialKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectRelativeStop(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectRelativeStop(1);
    }
  }, [selectRelativeStop]);

  const goToPrevHighlight = useCallback(() => {
    setSelectedHighlight((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: nextIndex };
    });
  }, []);

  const goToNextHighlight = useCallback(() => {
    setSelectedHighlight((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index + 1) % prev.images.length;
      return { ...prev, index: nextIndex };
    });
  }, []);

  useEffect(() => {
    if (!selectedHighlight) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedHighlight(null);
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevHighlight();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextHighlight();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedHighlight, goToPrevHighlight, goToNextHighlight]);

  return (
    <>
      <div className="travel-page" style={{ minHeight: "100vh" }}>
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* ── Header ── */}
        <div className="jp-travel-header" style={{
          padding: "32px 56px 24px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          position: "relative", overflow: "visible", flexShrink: 0,
        }}>
          <span style={{
            position: "absolute", top: -10, right: 10,
            fontSize: 160, fontWeight: 800,
            color: "rgba(192,57,43,0.04)",
            pointerEvents: "none", userSelect: "none", lineHeight: 1,
          }}>{trip.heroCharacter}</span>

          <p style={{
             fontSize: 11,
             color: accentColor,
            marginBottom: 8, textTransform: "uppercase",
          }}>{trip.dates}</p>

          <div className="jp-travel-heading" style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
            <h1 style={{
              
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 800, lineHeight: 1.1, margin: 0,
            }}>
              {trip.title} {trip.nativeTitle && <span style={{ color: accentColor }}>{trip.nativeTitle}</span>}
            </h1>
            <p style={{
              fontSize: 14, lineHeight: 1.6, color: "#5a5040",
              fontStyle: "italic", margin: 0, maxWidth: 420,
            }}>
              {trip.intro}
            </p>
          </div>

        <div className="jp-day-dial-nav">
          <p className="jp-day-dial-hint">Drag the handle around the clock to travel through the trip</p>
          <div
            ref={dialWrapRef}
            className="jp-day-dial-wrap"
            style={{ "--jp-dial-handle-angle": `${dialHandleAngle}deg` } as React.CSSProperties}
          >
            <div className="jp-day-dial-handle-orbit">
              <div
                className="jp-day-dial-handle"
                role="slider"
                tabIndex={0}
                aria-label="Trip timeline"
                aria-valuemin={0}
                aria-valuemax={stops.length - 1}
                aria-valuenow={activeStop}
                aria-valuetext={`${getDayKey(stops[activeStop].day)}, ${getTimeLabel(activeTimeOfDay)}`}
                onPointerDown={handleDialPointerDown}
                onPointerMove={handleDialPointerMove}
                onPointerUp={handleDialPointerEnd}
              onPointerCancel={handleDialPointerEnd}
              onKeyDown={handleDialKeyDown}
            >
                <span className="jp-day-dial-handle-icon" aria-hidden="true"></span>
              </div>
            </div>
          <div
            className="jp-day-dial"
            data-time={activeTimeOfDay}
          >
            <div className="jp-day-dial-ticks" aria-hidden="true">
              {stops.map((stop, index) => (
                <span
                  key={`${stop.day}-${stop.place}-${index}`}
                  className={`jp-day-dial-tick ${getTimeOfDay(stop)} ${index === activeStop ? "active" : ""}`}
                  style={{ transform: `translate(-50%, -50%) rotate(${index * (360 / stops.length)}deg) translateY(calc(-1 * var(--jp-dial-tick-radius)))` }}
                />
              ))}
            </div>
            <div className="jp-day-dial-sky" aria-hidden="true">
              <span className="jp-day-dial-sun" />
              <span className="jp-day-dial-moon" />
              <span className="jp-day-dial-cloud cloud-one" />
              <span className="jp-day-dial-cloud cloud-two" />
            </div>
            <div className="jp-day-dial-center">
              <span>{getDayKey(stops[activeStop].day)}</span>
              <strong>{getTimeIcon(activeTimeOfDay)} {getTimeLabel(activeTimeOfDay)}</strong>
            </div>
          </div>
          </div>
        </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{ flex: 1, overflowY: "hidden", position: "relative" }}
        >
          <div style={{
            position: "sticky",
            top: 0,
            height: "100%",
            display: "flex",
            zIndex: 2,
            pointerEvents: "auto",
          }}>
            <div style={{ flex: 1, position: "relative" }}>
              <div
                ref={mapContainerRef}
                style={{ width: "100%", height: "100%" }}
              />

              {/* City badge — non-interactive */}
              <div style={{
                position: "absolute", bottom: 24, left: 24,
                background: "rgba(250,246,240,0.92)",
                backdropFilter: "blur(8px)",
                padding: "10px 18px", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.08)",
                pointerEvents: "none", zIndex: 10,
              }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 17 }}>
                  {stops[activeStop].city}
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "#7a7060" }}>
                  {stops[activeStop].place}
                </p>
              </div>

              {/* Nav dots */}
              <div style={{
                position: "absolute", top: "50%", right: 16,
                transform: "translateY(-50%)",
                display: "flex", flexDirection: "column", gap: 10,
                zIndex: 10,
              }}>
                {stops.map((s, i) => (
                  <button
                    key={`${s.day}-${s.place}-${i}`}
                    className={`jp-nav-dot ${i === activeStop ? "active" : ""}`}
                    onClick={() => scrollToStop(i)}
                    title={s.place}
                  />
                ))}
              </div>
            </div>

            {/* Side panel */}
            <div style={{
              width: "min(600px, 50vw)",
              overflowY: "visible",
              // background: "#fef7f9",
              // borderLeft: "1px solid rgba(0,0,0,0.07)",
              padding: "36px 32px",
            }}>
              {(() => {
                const s = stops[activeStop];
                const stopColor = getStopColor(s);
                const highlightLabels = s.highlights.filter((h) => h.trim().length > 0);
                const placeholders = highlightLabels.length
                  ? highlightLabels
                  : [`${s.place} streets`, `${s.place} food`, `${s.place} at night`];
                const popupImages = placeholders.map((label, idx) => ({
                  src: buildPlaceholderImage(s, label, idx, stopColor),
                  alt: `${s.place} - ${label}`,
                }));
                return (
                  <div key={`${s.day}-${s.place}-${activeStop}`} style={{ animation: "jp-fade-slide 0.45s ease both" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 18 }}>
                      <p style={{
                         fontSize: 12,
                        letterSpacing: "0.2em", color: accentColor, textTransform: "uppercase",
                      }}>{s.day}</p>
                      {/* <p style={{ fontSize: 12, color: "#aaa" }}>—</p> */}
                      <p style={{ fontSize: 12, color: "#7a7060" }}>{s.date}</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                      <p style={{ fontSize: 32, lineHeight: 1 }}>{s.emoji}</p>
                      <h2 style={{
                         fontSize: 24,
                        fontWeight: 600, margin: 0, lineHeight: 1.2,
                      }}>{s.title}</h2>
                    </div>

                    <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#7a7060", textTransform: "uppercase", marginBottom: 18 }}>
                      📍 {s.place}, {s.city}
                    </p>

                    <div style={{ height: 1, marginBottom: 20 }} />

                    <p style={{ fontSize: 14, lineHeight: 1.85, color: "#3a3020", marginBottom: 24 }}>
                      {s.description}
                    </p>

                    <div style={{ marginBottom: 32 }}>
                      <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 8 }}>
                        Highlights
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          overflowX: "auto",
                          paddingBottom: 6,
                          scrollSnapType: "x mandatory",
                        }}
                      >
                        {popupImages.map((img, idx) => {
                          return (
                            <button
                              key={`${img.alt}-${idx}`}
                              onClick={() => setSelectedHighlight({ images: popupImages, index: idx })}
                              style={{
                                flex: "0 0 190px",
                                border: "1px solid rgba(0,0,0,0.08)",
                                background: "#fff",
                                borderRadius: 10,
                                padding: 0,
                                cursor: "pointer",
                                overflow: "hidden",
                                textAlign: "left",
                                scrollSnapAlign: "start",
                              }}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                style={{ width: "100%", height: 120, objectFit: "cover", display: "block" }}
                              />
                              <p
                                style={{
                                  margin: 0,
                                  padding: "8px 10px",
                                  fontSize: 12,
                                  color: "#554a3a",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  overflow: "hidden",
                                }}
                              >
                                {img.alt.replace(`${s.place} - `, "")}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb", marginBottom: 6 }}>
                        <span>Trip progress</span>
                        <span>{activeStop + 1} / {stops.length}</span>
                      </div>
                      <div style={{ height: 3, background: "rgba(0,0,0,0.07)", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{
                          height: "100%",
                          width: `${((activeStop + 1) / stops.length) * 100}%`,
                          background: accentColor, borderRadius: 99,
                          transition: "width 0.6s ease",
                        }} />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}>
            {stops.map((stop) => (
              <div
                key={`${stop.day}-${stop.place}-${stop.date}`}
                style={{ height: "100vh" }}
              />
            ))}
          </div>
        </div>

        </div>

        <section style={{
          padding: "72px 56px 84px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{
              margin: "0 0 10px",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: accentColor,
            }}>
              {trip.afterRoute.eyebrow}
            </p>
            <h2 style={{
              margin: "0 0 14px",
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.15,
            }}>
              {trip.afterRoute.title}
            </h2>
            <p style={{
              margin: "0 0 34px",
              maxWidth: 720,
              color: "#5a5040",
              lineHeight: 1.7,
              fontSize: 15,
            }}>
              {trip.afterRoute.description}
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}>
              {trip.afterRoute.cards.map((card) => (
                <article key={card.title} style={{ background: "#ffffffcc", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 14, padding: 20 }}>
                  <p style={{ margin: "0 0 8px", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: accentColor }}>
                    {card.eyebrow}
                  </p>
                  <h3 style={{ margin: "0 0 10px", fontSize: 19 }}>{card.title}</h3>
                  <p style={{ margin: 0, lineHeight: 1.7, color: "#3a3020", fontSize: 14 }}>
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {selectedHighlight && (
          <div
            onClick={() => setSelectedHighlight(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.72)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
              padding: 20,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(940px, 96vw)",
                background: "#111",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.2)",
                position: "relative",
              }}
            >
              {selectedHighlight.images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevHighlight}
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "1px solid rgba(255,255,255,0.45)",
                      background: "rgba(0,0,0,0.45)",
                      color: "#fff",
                      borderRadius: 999,
                      width: 38,
                      height: 38,
                      cursor: "pointer",
                      fontSize: 20,
                      lineHeight: 1,
                    }}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={goToNextHighlight}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "1px solid rgba(255,255,255,0.45)",
                      background: "rgba(0,0,0,0.45)",
                      color: "#fff",
                      borderRadius: 999,
                      width: 38,
                      height: 38,
                      cursor: "pointer",
                      fontSize: 20,
                      lineHeight: 1,
                    }}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
              <img
                src={selectedHighlight.images[selectedHighlight.index].src}
                alt={selectedHighlight.images[selectedHighlight.index].alt}
                style={{ width: "100%", height: "min(76vh, 680px)", objectFit: "contain", background: "#111" }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  color: "#fff",
                  fontSize: 13,
                }}
              >
                <span>
                  {selectedHighlight.images[selectedHighlight.index].alt}
                  {selectedHighlight.images.length > 1
                    ? ` (${selectedHighlight.index + 1}/${selectedHighlight.images.length})`
                    : ""}
                </span>
                <button
                  onClick={() => setSelectedHighlight(null)}
                  style={{
                    border: "1px solid rgba(255,255,255,0.45)",
                    background: "transparent",
                    color: "#fff",
                    borderRadius: 999,
                    padding: "6px 10px",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
