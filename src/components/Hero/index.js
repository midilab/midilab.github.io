import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import ActionButtons from "../ActionButtons";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const Hero = ({ data, index }) => {
  const { siteConfig } = useDocusaurusContext();

  const background = data.background ? {
    backgroundImage: `url(${data.background})`,
  } : undefined
  
  return (
      <div 
        className={clsx(background ? styles.heroImage : styles.heroDefaultBg)} 
        style={{...background, width: '100%', marginLeft: 0}}
      >
        <header
          key={index}
          className={clsx(background && ["hero hero--primary", styles.heroImageGradient], styles.heroBanner)}
          style={{width: '100%'}}
        >
          <div className="container" style={{maxWidth: '100%'}}>
            <h1 className={clsx("hero__title", styles.title)}>
              {data.title ? data.title : siteConfig.title}
            </h1>
            <p className={clsx(styles.heroSubtitle, "hero__subtitle")}>
              {data.subtitle ? data.subtitle : siteConfig.tagline}
            </p>
            {data.actions && <ActionButtons actions={data.actions} />}
          </div>
        </header>
      </div>
  );
};
