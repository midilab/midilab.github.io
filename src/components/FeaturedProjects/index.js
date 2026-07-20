import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'lucide-react';
import styles from './index.module.css';

const projects = [
  {
    name: 'JC-303',
    tag: 'DSP Plugin',
    image: '/img/roland303-header1.jpg',
    description:
      'A free Roland TB-303 emulation plugin for Windows, macOS and Linux. Ships as VST2, VST3, LV2, CLAP and AU.',
    href: '/jc303',
  },
  {
    name: 'Aciduino',
    tag: 'Sequencer',
    image: '/img/aciduino/aciduino_v1-3.jpeg',
    description:
      'Affordable and DIY: a Roland TB-303 and TR-808 step sequencer clone and MIDI controller you can build yourself.',
    href: '/aciduino',
  },
  {
    name: 'µClock',
    tag: 'Library',
    image: '/img/master_clocks_syncflash.jpg',
    description:
      'A tight music clock generator for Arduino and PlatformIO using hardware timer interruption.',
    href: '/uClock',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className={`${styles.section} anchor-offset`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.tag}>Featured Projects</span>
            <h2 className={styles.heading}>Our top 3 projects</h2>
            <p className={styles.desc}>
              A DSP plugin, a hardware sequencer, and a firmware library, open source, free to use, and free to build.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.tag}`}
                  className={styles.image}
                />
                <span className={styles.badge}>{project.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <ArrowUpRight className={styles.cardIcon} />
                </div>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
