'use client';

import { useRef, useState, useEffect } from 'react';
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

export default function Showreel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      if (sectionVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [sectionVisible]);

  const scroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollAmount = 420;
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
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

      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.track}>
          {videos.map((video, idx) => (
            <div key={video.id} className={styles.card}>
              <div className={styles.videoWrap}>
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  preload="none"
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
