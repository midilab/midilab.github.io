import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const homepageData = {
  title: 'midilab',
  description: 'DIY Electronic Music Instruments',
  blocks: [
    {
      background: '/img/header_test2.jpg',
      title: 'DIY Electronic Music Instruments',
      subtitle: 'Open Source projects and resources for anyone interested in creating their own cheap and hackable music and noise instruments.',
      _template: 'hero',
    },
    {
      items: [
        {
          title: 'Open Hardware',
          description: 'All our hardware designs are thoughtfully crafted and made readily available for you to freely use, adapt, and distribute.\n',
          image: '/img/open_hardware.svg',
        },
        {
          title: 'Open Firmware',
          description: 'Our libraries prioritize modularity and multi-architecture support, ensuring versatility and freeing you from vendor lock-in.\n',
          image: '/img/open_firmware.svg',
        },
        {
          title: 'Open Source',
          description: 'Understand, adapt, and collaborate - Embrace our MIT based releases for open source empowerment.\n',
          image: '/img/open_source.svg',
        },
      ],
      _template: 'features',
    },
  ],
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={homepageData.title || siteConfig.title}
      description={homepageData.description || siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}