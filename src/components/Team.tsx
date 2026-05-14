'use client';

import Reveal from './Reveal';
import ProfileCard from './ProfileCard';
import styles from './Team.module.css';

const team = [
  {
    name: 'Aykan A',  // ← echter Name
    title: 'Creative Director',  // ← echte Rolle
    handle: 'name.amtrix',
    status: 'Online',
    avatarUrl: '/team/aykan.jpg',  // ← Pfad zum Foto
  },
  {
    name: 'Lorik Gashi',
    title: 'Marketing Strategin',
    handle: 'name.amtrix',
    status: 'Online',
    avatarUrl: '/team/lorik.jpg',  // ← Pfad zum zweiten Foto
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
              title={member.title}
              handle={member.handle}
              status={member.status}
              avatarUrl={member.avatarUrl}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(200, 255, 0, 0.4)"
              innerGradient="linear-gradient(145deg, rgba(200,255,0,0.08) 0%, rgba(0,0,0,0.4) 100%)"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
