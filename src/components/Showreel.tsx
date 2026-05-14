'use client';

import { useRef, useEffect, useState } from 'react';
import Reveal from './Reveal';
import styles from './Showreel.module.css';

const projects = [
  {
    id: 1,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-1.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 2,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-2.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 3,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-3.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 4,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-4.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 5,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-5.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 6,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-6.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 7,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-7.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 8,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-8.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 9,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-9.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 10,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-10.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
  {
    id: 11,
    title: 'Showreel',
    client: 'amtrixmarketing',
    image: '/showreel/project-11.jpg',
    instagramUrl: 'https://www.instagram.com/amtrixmarketing/',
  },
];

const loopedProjects = projects.length > 1 ? [...projects, ...projects] : projects;

export default function Showreel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Slide Animation
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || projects.length <= 1) return;

    let animationId: number;
    const speed = 0.6;

    const animate = () => {
      if (!isPaused && carousel) {
        carousel.scrollLeft += speed;
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
              auf Instagram findest du die vollständigen Cases.
            </p>
          </div>
        </div>
      </Reveal>

      <div className={styles.carouselWrap}>
        <div
          className={styles.carousel}
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.track}>
            {loopedProjects.map((project, idx) => (
              <a
                key={`${project.id}-${idx}`}
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={project.image}
                    alt={`${project.client} - ${project.title}`}
                    loading="lazy"
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                  <div className={styles.playIcon}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="27" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M22 18L40 28L22 38V18Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className={styles.info}>
                  <span className={styles.client}>{project.client}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}
