"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/travel/travel.module.css";

type Stop = {
  name: string;
  heading: string;
  detail: string;
  flag: string;
  href: string;
};

type PositionedStop = Stop & { angle: number };

const MIN_ANGLE = 204;
const MAX_ANGLE = 336;
const cx = 500;
const cy = 520;
const radius = 430;

// Add future destinations here. Their angles are calculated evenly across the rim.
const STOPS: PositionedStop[] = [
  { name: "Taiwan", heading: "Taiwan", detail: "Cherry blossoms, tiny alleyways, and too much matcha.", flag: "🇹🇼", href: "/travel/taiwan" },
  { name: "Japan", heading: "Japan", detail: "Cherry blossoms, tiny alleyways, and too much matcha.", flag: "🇯🇵", href: "/travel/japan" },
  { name: "Hawaiʻi", heading: "Maui", detail: "Salt in my hair and a very happy camera roll.", flag: "🇺🇸", href: "/travel/maui" },
  { name: "China", heading: "China", detail: "A homecoming full of family, food, and familiar streets.", flag: "🇨🇳", href: "/travel/china" },
].map((stop, index, stops) => ({
  ...stop,
  angle: stops.length === 1
    ? (MIN_ANGLE + MAX_ANGLE) / 2
    : MIN_ANGLE + (index / (stops.length - 1)) * (MAX_ANGLE - MIN_ANGLE),
}));

function pointAt(angle: number, distance = radius) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: cx + Math.cos(radians) * distance,
    y: cy + Math.sin(radians) * distance,
  };
}

function nearestStop(angle: number): PositionedStop {
  return STOPS.reduce((closest, stop) =>
    Math.abs(stop.angle - angle) < Math.abs(closest.angle - angle) ? stop : closest
  );
}

export default function TravelMain() {
  const svgRef = useRef<SVGSVGElement>(null);
  const angleRef = useRef(STOPS[0].angle);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<null | { clientX: number; angle: number }>(null);
  const snapAnimationRef = useRef<number | null>(null);
  const moveToAdjacentStopRef = useRef<(direction: -1 | 1) => void>(() => {});
  const viewTripLinkRef = useRef<HTMLAnchorElement>(null);
  const [angle, setAngle] = useState(STOPS[0].angle);
  const [activeStop, setActiveStop] = useState<PositionedStop>(STOPS[0]);

  const setAngleImmediately = (nextAngle: number) => {
    angleRef.current = nextAngle;
    setAngle(nextAngle);
  };

  const cancelSnapAnimation = () => {
    if (snapAnimationRef.current !== null) {
      cancelAnimationFrame(snapAnimationRef.current);
      snapAnimationRef.current = null;
    }
  };

  const updateAngle = (nextAngle: number) => {
    cancelSnapAnimation();
    setAngleImmediately(nextAngle);
  };

  const animateToAngle = (targetAngle: number, duration = 360) => {
    cancelSnapAnimation();
    const startAngle = angleRef.current;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const easedProgress = progress < 0.5
        ? 4 * progress ** 3
        : 1 - ((-2 * progress + 2) ** 3) / 2;
      setAngleImmediately(startAngle + (targetAngle - startAngle) * easedProgress);

      if (progress < 1) {
        snapAnimationRef.current = requestAnimationFrame(tick);
      } else {
        snapAnimationRef.current = null;
      }
    };

    snapAnimationRef.current = requestAnimationFrame(tick);
  };

  const moveFromDrag = (clientX: number) => {
    const rect = svgRef.current?.getBoundingClientRect();
    const dragStart = dragStartRef.current;
    if (!rect || !dragStart) return;
    const angleDelta = ((clientX - dragStart.clientX) / rect.width) * (MAX_ANGLE - MIN_ANGLE);
    updateAngle(Math.max(MIN_ANGLE, Math.min(MAX_ANGLE, dragStart.angle + angleDelta)));
  };

  const snapToNearestStop = () => {
    const stop = nearestStop(angleRef.current);
    animateToAngle(stop.angle);
    setActiveStop(stop);
    isDraggingRef.current = false;
    dragStartRef.current = null;
  };

  const finishDrag = () => {
    if (isDraggingRef.current) snapToNearestStop();
  };

  const activateStop = (stop: PositionedStop) => {
    isDraggingRef.current = false;
    dragStartRef.current = null;
    animateToAngle(stop.angle, 760);
    setActiveStop(stop);
  };

  const moveToAdjacentStop = (direction: -1 | 1) => {
    const activeIndex = STOPS.findIndex((stop) => stop.name === activeStop.name);
    const nextIndex = activeIndex + direction;
    if (nextIndex < 0 || nextIndex >= STOPS.length) return;
    activateStop(STOPS[nextIndex]);
  };

  moveToAdjacentStopRef.current = moveToAdjacentStop;

  const activeStopIndex = STOPS.findIndex((stop) => stop.name === activeStop.name);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        event.defaultPrevented
        || target?.matches("input, textarea, select, [contenteditable='true']")
      ) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveToAdjacentStopRef.current(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveToAdjacentStopRef.current(1);
      }
      if (event.key === "Enter") {
        event.preventDefault();
        viewTripLinkRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const plane = pointAt(angle, radius + 26);
  // The airplane emoji faces up-right by default, rather than straight up like the old icon.
  const planeRotation = angle + 135;

  return (
    <main className={styles.page}>
      <div className={styles.stopHeadingRow}>
        <div className={styles.titleControls}>
          <button
            className={styles.tripArrow}
            type="button"
            aria-label="Previous trip"
            disabled={activeStopIndex === 0}
            onClick={() => moveToAdjacentStop(-1)}
          >
            ⬅️
          </button>
          <h1 className={styles.stopHeading} aria-live="polite">{activeStop.heading}</h1>
          <button
            className={styles.tripArrow}
            type="button"
            aria-label="Next trip"
            disabled={activeStopIndex === STOPS.length - 1}
            onClick={() => moveToAdjacentStop(1)}
          >
            ➡️
          </button>
        </div>
        <Link ref={viewTripLinkRef} className={styles.stopLink} href={activeStop.href}>
          view trip →
        </Link>
      </div>
      <section className={styles.globeStage} aria-label="Interactive travel globe. Use the left and right arrow keys to change trips.">
        <svg
          ref={svgRef}
          className={styles.globe}
          viewBox="0 0 1000 540"
          aria-label="Travel globe"
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          <defs>
            <clipPath id="globe-clip">
              <path d="M70 520a430 430 0 0 1 860 0Z" />
            </clipPath>
            <radialGradient id="ocean" cx="50%" cy="28%" r="82%">
              <stop offset="0%" stopColor="#bce7ec" />
              <stop offset="70%" stopColor="#75bfcd" />
              <stop offset="100%" stopColor="#499aae" />
            </radialGradient>
            <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#245a68" floodOpacity=".25" />
            </filter>
          </defs>

          <path className={styles.globeShape} d="M70 520a430 430 0 0 1 860 0Z" />
          <g clipPath="url(#globe-clip)" className={styles.mapLines} aria-hidden="true">
            <ellipse cx="500" cy="520" rx="155" ry="430" />
            <ellipse cx="500" cy="520" rx="315" ry="430" />
            <path d="M92 395h816M128 284h744M212 167h576M358 109h284" />
            <path className={styles.land} d="M245 194c19-20 53-31 75-18l22 16 26-2 18 19-9 21 25 23-10 25-31 6-17 28-31 5-19 25-29-4-11-28-31-15-2-35 19-17-7-31 17-25Z" />
            <path className={styles.landLight} d="M386 126c13-14 47-15 61 0l-8 17-25 8-23-8-5-17Z" />
            <path className={styles.land} d="M389 323l29 9 20 25 3 34 18 33-6 39-17 28-15 43-20 8-16-28 7-38-17-39 10-36-11-31 25-47Z" />
            <path className={styles.landLight} d="M521 194l24-27 30 1 13 18 29-7 27 13 39-3 21 21 45 13 25 25-13 20-41 0-23 15-42-2-21 22-34-2-17 20-36-4-10-26-30-12 5-30-21-25 16-24Z" />
            <path className={styles.land} d="M568 304l36-14 33 21 5 42-15 35-2 50-23 30-27-15-5-39-18-34 14-33-8-43Z" />
            <path className={styles.landLight} d="M735 381l30-13 42 11 15 25-22 23-48 1-25-22 8-24Z" />
            <path className={styles.land} d="M460 220l16-7 13 10-4 16-17 6-13-10 5-15ZM719 290l17-4 13 12-6 15-18 3-11-12 5-14Z" />
            <circle className={styles.cloud} cx="190" cy="247" r="24" />
            <circle className={styles.cloud} cx="210" cy="240" r="31" />
            <circle className={styles.cloud} cx="231" cy="250" r="20" />
            <circle className={styles.cloud} cx="750" cy="345" r="21" />
            <circle className={styles.cloud} cx="772" cy="337" r="29" />
            <circle className={styles.cloud} cx="795" cy="347" r="19" />
          </g>
          <path className={styles.horizon} d="M70 520a430 430 0 0 1 860 0" />
          {/* <path className={styles.flightPath} d={`M${guideStart.x} ${guideStart.y} A ${radius + 3} ${radius + 3} 0 0 1 ${guideEnd.x} ${guideEnd.y}`} /> */}

          {STOPS.map((stop) => {
            const location = pointAt(stop.angle, radius + 18);
            return (
              <g
                key={stop.name}
                className={styles.stop}
                role="button"
                aria-label={`View ${stop.name}`}
                onClick={() => activateStop(stop)}
              >
                <g transform={`translate(${location.x} ${location.y})`}>
                  <circle r="34" className={styles.stopHitArea} />
                  <text className={styles.stopFlagEmoji} textAnchor="middle" dominantBaseline="central">{stop.flag}</text>
                </g>
              </g>
            );
          })}

          <g
            transform={`translate(${plane.x} ${plane.y})`}
            className={styles.planeHitArea}
            onPointerDown={(event) => {
              event.stopPropagation();
              event.currentTarget.setPointerCapture(event.pointerId);
              cancelSnapAnimation();
              isDraggingRef.current = true;
              dragStartRef.current = { clientX: event.clientX, angle: angleRef.current };
            }}
            onPointerMove={(event) => {
              if (isDraggingRef.current) moveFromDrag(event.clientX);
            }}
            onPointerUp={(event) => {
              event.stopPropagation();
              finishDrag();
            }}
            onPointerCancel={finishDrag}
            onLostPointerCapture={finishDrag}
          >
            <circle r="50" className={styles.planeGrabZone} />
            <g transform={`rotate(${planeRotation})`} filter="url(#soft-shadow)">
              <text className={styles.planeEmoji} textAnchor="middle" dominantBaseline="central">✈️</text>
            </g>
          </g>
        </svg>
      </section>
    </main>
  );
}
