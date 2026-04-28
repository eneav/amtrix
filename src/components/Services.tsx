'use client';

import Reveal from './Reveal';
import styles from './Services.module.css';

const services = [
  {
    num: '01',
    icon: '◎',
    title: 'Branding & Identität',
    desc: 'Von Logo bis Brand Guidelines — wir schaffen visuelle Identitäten, die im Gedächtnis bleiben und Vertrauen aufbauen.',
  },
  {
    num: '02',
    icon: '⬡',
    title: 'Web Design & Development',
    desc: 'Moderne, performante Websites die konvertieren. Von Landing Pages bis komplexe Webapplikationen.',
  },
  {
    num: '03',
    icon: '◈',
    title: 'Performance Marketing',
    desc: 'Datengetriebene Kampagnen auf Meta, Google & TikTok. Wir maximieren ROI und skalieren, was funktioniert.',
  },
  {
    num: '04',
    icon: '◉',
    title: 'Social Media Management',
    desc: 'Content-Strategien, Community Building und organisches Wachstum für eine authentische Markenpräsenz.',
  },
  {
    num: '05',
    icon: '⬢',
    title: 'SEO & Content',
    desc: 'Technische Optimierung, Content-Strategie und Link Building für nachhaltiges organisches Wachstum.',
  },
  {
    num: '06',
    icon: '✦',
    title: 'Strategie & Beratung',
    desc: 'Marktanalysen, Positionierung und Go-to-Market Strategien für Unternehmen, die den nächsten Schritt gehen wollen.',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <Reveal>
        <div className={styles.header}>
          <div>
            <div className="section-label">Was wir machen</div>
            <h2 className="section-title">
              Services <em>die<br />bewegen</em>
            </h2>
          </div>
          <p className={styles.desc}>
            Wir gestalten digitale Erlebnisse von A bis Z — Branding, Strategie,
            Design und Engineering für Marken, die auffallen wollen.
          </p>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <Reveal key={s.num} delay={0.1 * ((i % 3) + 1)}>
            <div className={styles.card}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className={styles.arrow}>Mehr erfahren →</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
