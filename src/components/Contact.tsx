'use client';

import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <Reveal>
          <div className="section-label">Kontakt</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className={styles.title}>
            Lass uns<br />
            <em>gemeinsam starten</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={styles.subtitle}>
            Bereit für den nächsten Schritt? Schreib uns — wir melden uns
            innerhalb von 24 Stunden.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Name</label>
                <input type="text" placeholder="Max Mustermann" />
              </div>
              <div className={styles.group}>
                <label>Email</label>
                <input type="email" placeholder="max@unternehmen.de" />
              </div>
            </div>
            <div className={styles.group}>
              <label>Betreff</label>
              <input type="text" placeholder="Worum geht es?" />
            </div>
            <div className={styles.group}>
              <label>Nachricht</label>
              <textarea placeholder="Erzähl uns von deinem Projekt..." />
            </div>
            <button className={styles.submit}>Nachricht senden →</button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className={styles.divider}>
            <span>oder</span>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className={styles.calendly}>
            <div className="section-label">Direkt einen Termin buchen</div>
            <p className={styles.calendlySub}>
              Wähle einen passenden Zeitpunkt für ein unverbindliches Erstgespräch.
            </p>
            <div className={styles.calendlyEmbed}>
              <iframe
                src="https://www.cal.eu/amtrixmarketing?theme=dark"
                width="100%"
                height="700"
                frameBorder="0"
                title="Termin buchen"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
