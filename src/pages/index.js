import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

const projects = [
  {
    category: "DSP",
    title: "JC-303",
    description:
      "A Free Roland TB-303 Plugin for Windows, MacOS and Linux: VST2, VST3, LV2, CLAP and AU.",
    image: "/img/roland303-header1.jpg",
    href: "/jc303",
  },
  {
    category: "Sequencer",
    title: "Aciduino",
    description:
      "Affordable and DIY, Roland TB-303 and TR-808 step sequencer clone and midi controller.",
    image: "/img/aciduino/aciduino_v1-3.jpeg",
    href: "/aciduino",
  },
  {
    category: "Libraries",
    title: "µClock",
    description:
      "A tight music clock generator for Arduino and PlatformIO using hardware timer interruption.",
    image: "/img/master_clocks_syncflash.jpg",
    href: "/uClock",
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function ProjectCard({ category, title, description, image, href }) {
  return (
    <Link href={href} className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <span className={styles.projectCategory}>{category}</span>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </Link>
  );
}

function OpenSourceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function HardwareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function LibraryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="DIY Electronic Music Instruments"
      description={siteConfig.tagline}
    >
      <header className={styles.heroBanner}>
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: "url(/img/header_test2.jpg)" }}
        />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            Open Source Electronic Instruments
          </span>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroCta}>
            <Link className="button button--primary" to="#featured">
              Featured
            </Link>
            <Link
              className="button button--outline"
              href="https://github.com/midilab"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <FeatureCard
            icon={<HardwareIcon />}
            title="Open Hardware"
            description="Thoughtfully crafted designs freely available for you to use, adapt, and distribute under open licenses."
          />
          <FeatureCard
            icon={<LibraryIcon />}
            title="Open Firmware"
            description="Modular, multi-architecture libraries freeing you from vendor lock-in and platform constraints."
          />
          <FeatureCard
            icon={<OpenSourceIcon />}
            title="Open Source"
            description="MIT licensed releases enabling you to understand, adapt, and collaborate on our projects."
          />
        </div>
      </section>

      <section id="featured" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Explore our open source electronic music instruments and libraries
          </p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Want to build your own instruments?
          </h2>
          <p className={styles.ctaDescription}>
            Dive into our documentation and start creating. All projects are
            open source and community-driven.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary" to="/docs/intro">
              Get Started
            </Link>
            <Link
              className="button button--outline"
              href="https://discord.gg/DCb3dy5A"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
