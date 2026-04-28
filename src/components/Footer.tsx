import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 amtrixmarketing. Alle Rechte vorbehalten.</p>
      <div className={styles.links}>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}
