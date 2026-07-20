import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight, Heart } from 'lucide-react';
import { GithubIcon } from '../Icons';
import useTypewriter from './useTypewriter';
import styles from './index.module.css';

export default function HeroSection() {
  const { displayText } = useTypewriter([
    'by makers.',
    'for makers.',
  ]);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <img
          src="/img/header_test2.jpg"
          alt=""
          aria-hidden="true"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          <span className={styles.tag}>
            Open Hardware · Firmware · Source
          </span>

          <h1 className={styles.title}>
            DIY electronic music instruments,{' '}
            <span className={`${styles.titleAccent} ${styles.typing}`}>
              built {displayText}
            </span>
          </h1>

          <p className={styles.description}>
            open hardware designs, modular firmware libraries,
            and free plugins for electronic musicians. Understand it, adapt it,
            build it yourself — all community-driven and MIT licensed.
          </p>

          <div className={styles.ctas}>
            <Link className="button button--primary button--lg" to="#projects">
              Featured projects
              <ArrowRight className="icon-sm" />
            </Link>
            <Link
              className="button button--outline button--lg"
              to="#support"
            >
              <Heart className="icon-sm" />
              Support midilab
            </Link>
          </div>

          <div className={styles.metadata}>
            <span className={styles.metaItem}>
              <GithubIcon className="icon-sm" />
              open source
            </span>
            <span className={styles.metaMono}>MIT Licensed</span>
            <span className={styles.metaMono}>CC-BY-SA 4.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
