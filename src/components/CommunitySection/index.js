import React from 'react';
import Link from '@docusaurus/Link';
import { MessagesSquare } from 'lucide-react';
import { GithubIcon } from '../Icons';
import styles from './index.module.css';

export default function CommunitySection() {
  return (
    <section id="community" className={`${styles.section} anchor-offset`}>
      <div className={styles.container}>
        <span className={styles.tag}>Community</span>
        <h2 className={styles.heading}>
          Want to build your own instruments?
        </h2>
        <p className={styles.desc}>
          Get involved via our Discord server. All projects are open source and
          community-driven — share builds, ask questions, and help shape what
          comes next.
        </p>
        <div className={styles.ctas}>
          <Link
            className="button button--primary button--lg"
            to="https://discord.gg/EzbaPqwCJG"
          >
            <MessagesSquare className="icon-sm" />
            Join the Discord
          </Link>
          <Link
            className="button button--outline button--lg"
            to="https://github.com/midilab"
          >
            <GithubIcon className="icon-sm" />
            Contribute on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
