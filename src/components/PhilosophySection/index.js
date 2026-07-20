import React from 'react';
import { CircuitBoard, Cpu, Code2 } from 'lucide-react';
import styles from './index.module.css';

const pillars = [
  {
    icon: CircuitBoard,
    title: 'Open Hardware',
    description:
      'Thoughtfully crafted designs freely available for you to use, adapt, and distribute under open licenses.',
  },
  {
    icon: Cpu,
    title: 'Open Firmware',
    description:
      'Modular, multi-architecture libraries freeing you from vendor lock-in and platform constraints.',
  },
  {
    icon: Code2,
    title: 'Open Source',
    description:
      'MIT licensed releases enabling you to understand, adapt, and collaborate on our projects.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className={`${styles.section} anchor-offset`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Open all the way down</h2>
          <p className={styles.desc}>
            Every layer of the stack is open — from the copper traces to the
            source code — so you can learn, remix, and truly own your
            instruments.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className={styles.card}>
                <div className="icon-box">
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
