'use client';

import Reveal from './Reveal';
import styles from './About.module.css';

const tags = ['Branding', 'UI/UX Design', 'Development', 'Marketing', 'Strategy', 'Content', 'Analytics'];

export default function About() {
  return (
    <section id="about">
      <div className={styles.about}>
        <div className={styles.grid}>
          <Reveal>
            <div className="section-label">Über uns</div>
            <p className={styles.quote}>
              Jedes Projekt ist eine Chance, Grenzen zu verschieben und etwas{' '}
              <em>Unvergessliches</em> zu schaffen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={styles.text}>
              amtrixmarketing ist eine Design- und Marketing-Agentur, die Marken
              dabei hilft, in der digitalen Welt aufzufallen. Wir verbinden
              Strategie mit Kreativität und Technologie.
            </p>
            <p className={styles.text}>
              Unser Team aus Designern, Entwicklern und Strategen arbeitet eng
              mit jedem Kunden zusammen, um maßgeschneiderte Lösungen zu liefern,
              die messbare Ergebnisse bringen.
            </p>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
