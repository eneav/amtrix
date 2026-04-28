'use client';

import { useRef, useState } from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  behindGlow?: boolean;
  accentColor?: string;
}

export default function ProfileCard({
  name,
  role,
  imageSrc,
  behindGlow = true,
  accentColor = 'var(--accent)',
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 20;
    const rotateX = (0.5 - y) * 20;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div className={styles.wrapper}>
      {behindGlow && (
        <div
          className={styles.glow}
          style={{ background: accentColor, opacity: 0.2 }}
        />
      )}
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
      >
        <div
          className={styles.shine}
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          }}
        />
        <div className={styles.content}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
          <div className={styles.imageWrap}>
            <img src={imageSrc} alt={name} className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
