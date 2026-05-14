'use client';

import { useState, useEffect } from 'react';
import Reveal from './Reveal';
import LineWaves from './LineWaves';
import styles from './Hero.module.css';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <LineWaves
          speed={0.3}
          innerLineCount={isMobile ? 50 : 32}
          outerLineCount={isMobile ? 60 : 36}
          warpIntensity={isMobile ? 1.4 : 1}
          rotation={isMobile ? -20 : -45}
          brightness={isMobile ? 0.3 : 0.2}
          color1="#c8ff00"
          color2="#ffffff"
          color3="#555555"
          mouseInteraction={!isMobile}
          mouseInfluence={2}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.content}>
        <Reveal>
          <div className={styles.label}>
            Marketing Agentur — Est. 2025
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className={styles.title}>
            Wir erschaffen<br />
            <em>wirkungsvolle</em><br />
            Marken
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={styles.sub}>
            Wir bauen Marken, Websites und digitale Erlebnisse
            mit Intention, Klarheit und Leidenschaft.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.cta}>
              Projekt starten
              <span className={styles.ctaIcon}>↗</span>
            </a>
            <a href="#showreel" className={styles.ctaGhost}>
              Showreel ansehen
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.38}>
          <div className={styles.bottom}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>50+</h3>
                <p>Projekte</p>
              </div>
              <div className={styles.statItem}>
                <h3>98%</h3>
                <p>Zufriedenheit</p>
              </div>
              <div className={styles.statItem}>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollLine} />
              Scroll
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
