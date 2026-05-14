import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.logo}>amtrix<em>marketing</em></span>
        <p className={styles.tagline}>Marken mit Intention, Klarheit und Leidenschaft.</p>
      </div>

      <div className={styles.links}>
        <a
          href="https://www.instagram.com/amtrixmarketing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
          @amtrixmarketing
        </a>
      </div>

      <div className={styles.legal}>
        <span className={styles.copy}>© 2025 amtrixmarketing. Alle Rechte vorbehalten.</span>
        <div className={styles.legalLinks}>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
