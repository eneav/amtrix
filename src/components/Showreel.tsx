'use client';

import { useRef, useEffect, useState } from 'react';
import Reveal from './Reveal';
import styles from './Showreel.module.css';

const videos = [
  {
    id: 1,
    title: 'Showreel',
    client: 'amtrixmarketing',
    src: '/videos/showreel-1.mp4',
  },
  {
    id: 2,
    title: 'Showreel',
    client: 'amtrixmarketing',
    src: '/videos/showreel-2.mp4',
  },
  {
    id: 3,
    title: 'Showreel',
    client: 'amtrixmarketing',
    src: '/videos/showreel-3.mp4',
  },
  {
    id: 4,
    title: 'Showreel',
    client: 'amtrixmarketing',
    src: '/videos/showreel-4.mp4',
  },
  {
    id: 5,
    title: 'Showreel',
    client: 'amtrixmarketing',
    src: '/videos/showreel-5.mp4',
  },
  {
    id: 6,
    title: 'Showreel',
    client: 'amtrixmarketing',
    src: '/videos/showreel-6.mp4',
  },
];

// Verdoppelte Liste für nahtlosen Loop
const loopedVideos = [...videos, ...videos];

export default function Showreel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Slide Animation via scrollLeft
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    const speed = 0.6; // Pixel pro Frame

    const animate = () => {
      if (!isPaused && carousel) {
        carousel.scrollLeft += speed;

        // Bei der Hälfte zurückspringen (nahtloser Loop, da Videos verdoppelt sind)
        const halfWidth = carousel.scrollWidth / 2;
        if (carousel.scrollLeft >= halfWidth) {
          carousel.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Nur das mittig liegende Video abspielen + Highlight setzen
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let rafId: number;

    const updateCenterVideo = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      const tolerance = 100;

      videoRefs.current.forEach((video, idx) => {
        if (!video) return;
        const card = cardRefs.current[idx];
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - carouselCenter);

        if (distance < tolerance) {
          if (video.paused) video.play().catch(() => {});
          card.classList.add(styles.active);
        } else {
          if (!video.paused) video.pause();
          card.classList.remove(styles.active);
        }
      });
    };

    const loop = () => {
      updateCenterVideo();
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Pausiere alle Videos wenn Section out of viewport
  useEffect(() => {
    const section = carouselRef.current?.parentElement;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRefs.current.forEach((v) => v?.pause());
        }
      },
      { threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction === 'left' ? -420 : 420,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.section} id="showreel">
      <Reveal>
        <div className={styles.header}>
          <div>
            <div className="section-label">Unsere Arbeit</div>
            <h2 className="section-title">
              Showreel <em>2025</em>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.desc}>
              Ein Einblick in ausgewählte Projekte aus den letzten Monaten —
              von Brand Identity bis Performance-Kampagnen.
            </p>
            <div className={styles.controls}>
              <button
                className={styles.controlBtn}
                onClick={() => scroll('left')}
                aria-label="Vorherige"
              >
                ←
              </button>
              <button
                className={styles.controlBtn}
                onClick={() => scroll('right')}
                aria-label="Nächste"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <div
        className={styles.carousel}
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.track}>
          {loopedVideos.map((video, idx) => (
            <div
              key={`${video.id}-${idx}`}
              className={styles.card}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
            >
              <div className={styles.videoWrap}>
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className={styles.video}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.info}>
                <span className={styles.client}>{video.client}</span>
                <h3 className={styles.title}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}
