import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Hardware',
    Svg: require('@site/static/img/open_hardware.svg').default,
    description: 'All our hardware designs are thoughtfully crafted and made readily available for you to freely use, adapt, and distribute.',
  },
  {
    title: 'Open Firmware',
    Svg: require('@site/static/img/open_firmware.svg').default,
    description: 'Our libraries prioritize modularity and multi-architecture support, ensuring versatility and freeing you from vendor lock-in.',
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open_source.svg').default,
    description: 'Understand, adapt, and collaborate - Embrace our MIT based releases for open source empowerment.',
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-label={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}