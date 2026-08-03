"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from "react";
import type {
  TravelFoodFavorite,
  TravelItineraryConfig,
  TravelImage,
  TravelRecommendation,
  TravelStop,
  TravelTimeOfDay,
} from "@/components/travel/types";
import styles from "./JapanWheel.module.css";

const getDayKey = (dayLabel: string) => dayLabel.match(/^Day\s+\d+/i)?.[0] ?? dayLabel;

const getTimeOfDay = (stop: TravelStop): TravelTimeOfDay => {
  if (stop.timeOfDay) return stop.timeOfDay;
  if (stop.day.includes("🌤️")) return "afternoon";
  if (stop.day.includes("🌙")) return "evening";
  return "morning";
};

const getImageStack = (image: TravelStop["image"] | undefined): readonly TravelImage[] => {
  if (!image) return [];
  return "src" in image ? [image] : image;
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

function StopImageStack({
  images,
  timeOfDay,
}: {
  images: readonly TravelImage[];
  timeOfDay: TravelTimeOfDay;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const horizontalWheelDistance = useRef(0);
  const wheelGestureLocked = useRef(false);
  const wheelResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasMultipleImages = images.length > 1;
  const image = images[activeImage];
  const nextImage = hasMultipleImages ? images[(activeImage + 1) % images.length] : null;

  useEffect(() => () => {
    if (wheelResetTimer.current !== null) clearTimeout(wheelResetTimer.current);
  }, []);

  useEffect(() => {
    images.forEach((image) => {
      const preload = new window.Image();
      preload.decoding = "async";
      preload.src = image.src;
    });
  }, [images]);

  if (!image) return null;

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return;
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    if (wheelResetTimer.current !== null) clearTimeout(wheelResetTimer.current);
    wheelResetTimer.current = setTimeout(() => {
      horizontalWheelDistance.current = 0;
      wheelGestureLocked.current = false;
    }, 220);

    if (wheelGestureLocked.current) return;
    const previousDistance = horizontalWheelDistance.current;
    horizontalWheelDistance.current = Math.sign(previousDistance) === Math.sign(event.deltaX)
      ? previousDistance + event.deltaX
      : event.deltaX;

    if (Math.abs(horizontalWheelDistance.current) < 5) return;
    const direction = horizontalWheelDistance.current;
    horizontalWheelDistance.current = 0;
    wheelGestureLocked.current = true;
    setActiveImage((current) => (direction > 0
      ? (current + 1) % images.length
      : (current - 1 + images.length) % images.length));
  };

  return (
    <div
      className={`${styles.imageStack} ${hasMultipleImages ? styles.imageStackMultiple : styles.imageStackSingle}`}
      aria-label={hasMultipleImages ? `Photo ${activeImage + 1} of ${images.length}. Swipe horizontally on a touchpad to see more photos.` : undefined}
      onWheel={handleWheel}
    >
      {nextImage && (
        <button
          type="button"
          className={`${styles.popout} ${styles.imageStackPreview}`}
          aria-label={`Show next photo, ${activeImage + 2 > images.length ? 1 : activeImage + 2} of ${images.length}`}
          onClick={() => setActiveImage((current) => (current + 1) % images.length)}
        >
          <span className={`${styles.placeholderImage} ${styles[timeOfDay]}`}>
            <Image src={nextImage.src} alt="" fill sizes="(max-width: 700px) 360px, 310px" quality={65} unoptimized className={styles.tripImage} />
          </span>
        </button>
      )}
      <article key={image.src} className={`${styles.popout} ${styles.imageStackFront}`}>
        <div className={`${styles.placeholderImage} ${styles[timeOfDay]}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 700px) 360px, 310px"
            quality={65}
            priority
            unoptimized
            className={styles.tripImage}
          />
        </div>
        <p className={styles.imageStackCaption}>{image.caption}</p>
      </article>
    </div>
  );
}

type JapanWheelProps = {
  trip: TravelItineraryConfig;
  favoriteEats: readonly TravelFoodFavorite[];
  recommendations: readonly TravelRecommendation[];
};

export default function JapanWheel({
  trip,
  favoriteEats,
  recommendations,
}: JapanWheelProps) {
  const { stops } = trip;
  const dialWrapRef = useRef<HTMLDivElement>(null);
  const dialDragRef = useRef<number | null>(null);
  const dialAngleRef = useRef(0);
  const [activeStop, setActiveStop] = useState(0);
  const [dialAngle, setDialAngle] = useState(0);
  const [flippedRecommendations, setFlippedRecommendations] = useState<Set<number>>(() => new Set());

  const setDialAngleImmediately = useCallback((angle: number) => {
    dialAngleRef.current = angle;
    setDialAngle(angle);
  }, []);

  const selectStop = useCallback((index: number, angle?: number) => {
    const normalizedIndex = ((index % stops.length) + stops.length) % stops.length;
    setActiveStop(normalizedIndex);
    if (angle !== undefined) setDialAngleImmediately(angle);
  }, [setDialAngleImmediately, stops.length]);

  const moveWheel = useCallback((direction: -1 | 1) => {
    const step = 360 / stops.length;
    const nextAngle = dialAngleRef.current + direction * step;
    selectStop(Math.round(nextAngle / step), nextAngle);
  }, [selectStop, stops.length]);

  const selectStopFromTimeline = useCallback((index: number) => {
    const step = 360 / stops.length;
    const currentIndex = ((Math.round(dialAngleRef.current / step) % stops.length) + stops.length) % stops.length;
    const clockwiseSteps = (index - currentIndex + stops.length) % stops.length;
    const counterclockwiseSteps = clockwiseSteps - stops.length;
    const shortestSteps = Math.abs(clockwiseSteps) <= Math.abs(counterclockwiseSteps)
      ? clockwiseSteps
      : counterclockwiseSteps;
    selectStop(index, dialAngleRef.current + shortestSteps * step);
  }, [selectStop, stops.length]);

  const getDialAngleFromPointer = useCallback((clientX: number, clientY: number) => {
    const bounds = dialWrapRef.current?.getBoundingClientRect();
    if (!bounds) return dialAngleRef.current;

    const x = clientX - (bounds.left + bounds.width / 2);
    const y = clientY - (bounds.top + bounds.height / 2);
    const clockAngle = ((Math.atan2(y, x) * 180) / Math.PI + 450) % 360;
    return clockAngle + 360 * Math.round((dialAngleRef.current - clockAngle) / 360);
  }, []);

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dialDragRef.current = event.pointerId;
  }, []);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (dialDragRef.current !== event.pointerId) return;
    const step = 360 / stops.length;
    const snappedAngle = Math.round(getDialAngleFromPointer(event.clientX, event.clientY) / step) * step;
    selectStop(Math.round(snappedAngle / step), snappedAngle);
  }, [getDialAngleFromPointer, selectStop, stops.length]);

  const handlePointerEnd = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (dialDragRef.current !== event.pointerId) return;
    dialDragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

  const handleKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveWheel(-1);
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveWheel(1);
    }
  }, [moveWheel]);

  useEffect(() => {
    const handlePageKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        event.defaultPrevented
        || target?.matches("input, textarea, select, [contenteditable='true']")
      ) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        moveWheel(-1);
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        moveWheel(1);
      }
    };

    window.addEventListener("keydown", handlePageKeyDown);
    return () => window.removeEventListener("keydown", handlePageKeyDown);
  }, [moveWheel]);

  useEffect(() => {
    const nearbyStops = [-1, 1, 2, 3].map((offset) => (
      stops[(activeStop + offset + stops.length) % stops.length]
    ));
    const timer = window.setTimeout(() => {
      new Set(nearbyStops.map((nearbyStop) => (
        getImageStack(nearbyStop.image)[0]?.src
      )).filter((src): src is string => Boolean(src))).forEach((src) => {
        const preload = new window.Image();
        preload.decoding = "async";
        preload.src = src;
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [activeStop, stops]);

  const stop = stops[activeStop];
  const timeOfDay = getTimeOfDay(stop);
  const highlights = stop.highlights.slice(0, 3);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.tripInfo}>
          <p className={styles.tripName}>{trip.title} {trip.nativeTitle && <span>{trip.nativeTitle}</span>}</p>
          <p className={styles.tripDates}>{trip.dates}</p>
        </div>
        <h1 className={styles.placeHeading}>{stop.place}, <span>{stop.city}</span></h1>
        <br />
        <p className={styles.dates}>{stop.day} · {stop.date}</p>
      </header>

      <section className={styles.stage} aria-label="Japan trip timeline">
        <div key={`stamp-${activeStop}`} className={styles.placeStamp} aria-hidden="true">
          <span className={styles.stampPlace}>{stop.place}</span>
          <span className={styles.stampCity}>{stop.city} · Japan</span>
          <span className={styles.stampDay}>{getDayKey(stop.day)}</span>
        </div>

        <div key={`image-${activeStop}`} className={styles.imagePopout}>
          <StopImageStack
            key={activeStop}
            images={getImageStack(stop.image)}
            timeOfDay={timeOfDay}
          />
        </div>

        <div className={styles.wheelArea}>
          <div
            ref={dialWrapRef}
            className={`${styles.dialWrap} jp-day-dial-wrap`}
            style={{ "--jp-dial-handle-angle": `${dialAngle}deg` } as CSSProperties}
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
                aria-valuetext={`${getDayKey(stop.day)}, ${getTimeLabel(timeOfDay)}`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerEnd}
                onKeyDown={handleKeyDown}
              >
                <span className={styles.pinEmoji} aria-hidden="true">📍</span>
              </div>
            </div>
            <div className="jp-day-dial" data-time={timeOfDay}>
              <div className="jp-day-dial-ticks">
                {stops.map((timelineStop, index) => (
                  <button
                    type="button"
                    key={`${timelineStop.day}-${timelineStop.place}-${index}`}
                    className={`jp-day-dial-tick ${styles.tickButton} ${getTimeOfDay(timelineStop)} ${index === activeStop ? "active" : ""}`}
                    style={{ transform: `translate(-50%, -50%) rotate(${index * (360 / stops.length)}deg) translateY(calc(-1 * var(--jp-dial-tick-radius)))` }}
                    onClick={() => selectStopFromTimeline(index)}
                    aria-label={`View ${timelineStop.place}, ${timelineStop.city}`}
                    aria-pressed={index === activeStop}
                  />
                ))}
              </div>
              <div className="jp-day-dial-sky" aria-hidden="true">
                <span className="jp-day-dial-sun" />
                <span className="jp-day-dial-moon" />
                <span className="jp-day-dial-cloud cloud-one" />
                <span className="jp-day-dial-cloud cloud-two" />
              </div>
            </div>
          </div>
        </div>

        <article key={`details-${activeStop}`} className={`${styles.popout} ${styles.detailsPopout}`}>
          <p className={styles.day}>{timeOfDay} {getTimeIcon(timeOfDay)}</p>
          <h2>
            <span className={styles.stopEmoji} aria-hidden="true">{stop.emoji}</span>
            <span className={styles.locationHeading}>
              {stop.title}
              {/* <small>{stop.date}</small> */}
            </span>
          </h2>
          <p className={styles.description}>{stop.description}</p>
          <ul>
            {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>
      </section>

      <section className={styles.favEats} aria-labelledby="fav-eats-heading">
        <div className={styles.favEatsHeading}>
          <h2 id="fav-eats-heading">fav eats</h2>
        </div>
        <div className={styles.foodGrid}>
          {favoriteEats.map((food, index) => (
            <figure
              key={food.caption}
              className={`${styles.foodCard} ${styles[`foodCard${index + 1}`]}`}
              style={{ "--frame-color": food.border, "--frame-fill": food.fill } as CSSProperties}
            >
              <div className={styles.foodPlaceholder}>
                <Image
                  src={food.image.src}
                  alt={food.image.alt}
                  fill
                  sizes="(max-width: 620px) 360px, (max-width: 900px) calc((100vw - 58px) / 2), 338px"
                  quality={65}
                  unoptimized
                  className={styles.tripImage}
                />
              </div>
              <figcaption>
                {food.caption}
                <a className={styles.foodLocationLink} href={food.mapHref} target="_blank" rel="noreferrer" aria-label={`Open the location for ${food.caption}`}>📍</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.recommendations} aria-labelledby="reccs-heading">
        <div className={styles.favEatsHeading}>
          <h2 id="reccs-heading">reccs</h2>
        </div>
        {[recommendations.slice(0, 5), recommendations.slice(5)].map((row, rowIndex) => (
          <div className={`${styles.stringRow} ${rowIndex === 0 ? styles.topStringRow : styles.bottomStringRow}`} key={`recommendation-row-${rowIndex}`}>
            <svg className={styles.fairyString} viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
              <path d={rowIndex === 0
                ? "M0 42C42 44 72 51 100 52c78 8 138 40 200 43 70-1 132-39 200-49 72-1 139 27 200 32 70-4 132-39 200-49 40-4 75-1 100 3"
                : "M0 26c52 0 94 4 125 6 94 5 173 31 250 39 94 4 176 17 250 15 99-5 179-29 250-35 48-4 88-3 125 3"} />
            </svg>
            <div className={styles.recommendationRow}>
              {row.map((recommendation, index) => {
                const cardIndex = rowIndex === 0 ? index : index + 5;
                const isFlipped = flippedRecommendations.has(cardIndex);
                return (
                  <article
                    key={recommendation.name}
                    className={`${styles.recommendationCard} ${isFlipped ? styles.recommendationCardFlipped : ""}`}
                    style={{ "--card-color": recommendation.color } as CSSProperties}
                  >
                    <span className={styles.fairyBulb} aria-hidden="true" />
                    <div className={styles.recommendationInner}>
                      <div className={styles.recommendationFront}>
                        <button
                          type="button"
                          className={styles.recommendationToggle}
                          aria-label={`Show details for ${recommendation.name}`}
                          onClick={() => setFlippedRecommendations((previous) => new Set(previous).add(cardIndex))}
                        >
                          <div className={styles.recommendationImage}>
                            <Image
                              src={recommendation.image.src}
                              alt={recommendation.image.alt}
                              fill
                              sizes="(max-width: 620px) calc((100vw - 58px) / 2), (max-width: 900px) calc((100vw - 96px) / 3), 250px"
                              quality={65}
                              className={styles.tripImage}
                            />
                          </div>
                        </button>
                        <a className={styles.recommendationLink} href={recommendation.mapHref} onClick={(event) => event.stopPropagation()}>
                          {recommendation.name}
                        </a>
                      </div>
                      <div className={styles.recommendationBack}>
                        <button
                          type="button"
                          className={styles.recommendationToggle}
                          aria-label={`Hide details for ${recommendation.name}`}
                          onClick={() => setFlippedRecommendations((previous) => {
                            const next = new Set(previous);
                            next.delete(cardIndex);
                            return next;
                          })}
                        >
                          <p>why i&apos;d recommend it</p>
                          <strong>{recommendation.name}</strong>
                          <span>{recommendation.detail}</span>
                          <small>click to flip back</small>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
