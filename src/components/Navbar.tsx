'use client';

import styles from './Navbar.module.css';

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        amtrix<span>.</span>
      </a>
      <ul className={styles.links}>
        <li><button onClick={() => scrollTo('services')}>Services</button></li>
        <li><button onClick={() => scrollTo('showreel')}>Showreel</button></li>
        <li><button onClick={() => scrollTo('team')}>Team</button></li>
        <li><button onClick={() => scrollTo('about')}>Über uns</button></li>
        <li><button onClick={() => scrollTo('contact')}>Kontakt</button></li>
      </ul>
      <button className={styles.cta} onClick={() => scrollTo('contact')}>
        Schreib uns →
      </button>
    </nav>
  );
}
