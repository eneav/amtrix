'use client';

import styles from './Marquee.module.css';

const items = [
  'Branding', 'Web Design', 'Social Media', 'SEO',
  'Performance Marketing', 'Content Creation', 'UI/UX Design', 'Strategy',
];

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
