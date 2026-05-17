import React, { useState } from "react";
import { createPortal } from "react-dom";
import { paramCase } from "param-case";
import Markdown from "react-markdown";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./index.module.css";
import YouTubeEmbed from "../YouTube";

export function Card({
  id,
  photo,
  youtubeVid,
  icon,
  title,
  content,
  to,
  actionButton,
  tag,
  featured = false,
  animated = false,
  animationIndex = 0,
}) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const background = photo
    ? {
        backgroundImage: `url(${photo})`,
      }
    : undefined;

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const cardClasses = clsx(
    featured ? styles.cardFeatured : styles.card,
    animated && styles.cardAnimated,
    animated && animationIndex === 1 && styles.cardStagger1,
    animated && animationIndex === 2 && styles.cardStagger2,
    animated && animationIndex === 3 && styles.cardStagger3,
    animated && animationIndex === 4 && styles.cardStagger4,
    animated && animationIndex === 5 && styles.cardStagger5,
    animated && animationIndex === 6 && styles.cardStagger6,
    animated && animationIndex === 7 && styles.cardStagger7,
    animated && animationIndex === 8 && styles.cardStagger8,
  );

  return (
    <Link
      to={actionButton ? "" : to}
      className={cardClasses}
      data-has-action-button={actionButton ? "true" : undefined}
    >
      {icon && <div className={clsx(styles.icon)}>{icon}</div>}
      {photo && (
        <div
          className={clsx(background ? styles.cardPhoto : "")}
          style={background}
          onClick={toggleOverlay}
        ></div>
      )}
      {youtubeVid && <YouTubeEmbed videoId={youtubeVid} />}
      <div className={clsx(styles.cardContent)}>
        {title && (
          <h4 className={clsx(styles.title)} id={id && paramCase(title)}>
            {title}
          </h4>
        )}
        {content && (
          <Markdown className={clsx(styles.content)}>{content}</Markdown>
        )}
        {actionButton && (
          <Link
            className={clsx("button button--outline", styles.cardButton)}
            to={to}
          >
            {actionButton}
          </Link>
        )}
      </div>
      {tag && (
        <div className={clsx(styles.tag, "absolute right-0 top-0 h-16 w-16")}>
          <span
            className="absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white"
            style={{ backgroundColor: tag.color }}
            title={tag.description}
          >
            {tag.label}
          </span>
        </div>
      )}
      {isOverlayVisible && createPortal(
        <div className={clsx(styles.overlay)} onClick={toggleOverlay}>
          <div className={clsx(styles.overlayContent)} onClick={(e) => e.stopPropagation()}>
            <button className={clsx(styles.closeButton)} onClick={toggleOverlay} aria-label="Close">
              ×
            </button>
            <img src={photo} alt="Full-size view" />
          </div>
        </div>,
        document.body
      )}
    </Link>
  );
}

export function CardSection({
  id,
  title,
  description,
  className,
  HeadingTag = "h3",
  cards,
  animated = false,
}) {
  return (
    <div className={clsx(styles.section, className)}>
      {title && <HeadingTag id={id ?? paramCase(title)}>{title}</HeadingTag>}
      {description && (
        <p className={clsx(styles.sectionDescription)}>{description}</p>
      )}
      <div className={clsx(styles.cardsSection)}>
        {cards &&
          cards.map(function (card, i) {
            return (
              <Card
                {...card}
                key={i}
                animationIndex={i + 1}
                animated={animated}
              />
            );
          })}
      </div>
    </div>
  );
}
