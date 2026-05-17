import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import ActionButtons from "../ActionButtons";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const Hero = ({ data, index }) => {
  const { siteConfig } = useDocusaurusContext();

  const hasBackground = Boolean(data?.background);

  return (
    <div className={styles.heroWrapper}>
      <div
        className={styles.hero}
        style={hasBackground ? {
          backgroundImage: `url(${data.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {hasBackground && <div className={styles.heroBackground} />}
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Open Source Electronic Instruments</span>
          <h1 className={clsx("hero__title", styles.title)}>
            {data?.title ? data.title : siteConfig.title}
          </h1>
          <p className={clsx(styles.heroSubtitle, "hero__subtitle")}>
            {data?.subtitle ? data.subtitle : siteConfig.tagline}
          </p>
          {data?.actions && (
            <div className={styles.heroActions}>
              <ActionButtons actions={data.actions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};