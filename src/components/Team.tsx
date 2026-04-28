'use client';

import Reveal from './Reveal';
import ProfileCard from './ProfileCard';
import styles from './Team.module.css';

const team = [
  {
    name: 'Alex Müller',
    role: 'Creative Director',
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=530&fit=crop&crop=faces',
  },
  {
    name: 'Sarah Weber',
    role: 'Marketing Strategin',
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=530&fit=crop&crop=faces',
  },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <Reveal>
        <div className={styles.header}>
          <div className="section-label">Das Team</div>
          <h2 className="section-title">
            Die Köpfe <em>hinter<br />der Marke</em>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className={styles.grid}>
          {team.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
