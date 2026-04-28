'use client';

import Reveal from './Reveal';
import LineWaves from './LineWaves';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          brightness={0.2}
          color1="#c8ff00"
          color2="#ffffff"
          color3="#555555"
          mouseInteraction={true}
          mouseInfluence={2}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.content}>
        <Reveal>
          <div className={styles.label}>Marketing Agentur — Est. 2025</div>
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
        <Reveal delay={0.3}>
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
