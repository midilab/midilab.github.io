import React, { ReactNode, PropsWithChildren } from 'react';
import { paramCase } from 'param-case';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from "./index.module.css";
import ActionButtons from "../ActionButtons"
import YouTubeEmbed from "../YouTube"

export function Product({
  id,
  photo,
  youtubeVid,
  icon,
  title,
  content,
  to,
  actionButton,
  tag,
}) {
  
  const background = photo ? {
    backgroundImage: `url(${photo})`,
  } : undefined

  return (
    <Link to={actionButton ? '' : to} className={clsx(styles.card)}>
      {icon && <div className={clsx(styles.icon)}>{icon}</div>}
      {photo && <img className={clsx(background ? styles.cardPhoto : "")} src={photo} />}
      {youtubeVid && <YouTubeEmbed videoId={youtubeVid} />}
      <div className={clsx(styles.cardContent)}>
        <h4 className={clsx(styles.title)} id={id && paramCase(title)}>
          {title}
        </h4>
        {content && <div className={clsx(styles.content)}>{content}</div>}
        {actionButton && 
          <Link
            className={clsx("button button--outline button--block button--primary")}
            to={to}
          >
            {actionButton}
          </Link>
        }
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
    </Link>
  );
}

export function ShopShowCase({
  id,
  title,
  description,
  className,
  HeadingTag = 'h3',
  items,
}) {
  return (
    <div
      className={clsx(
        styles.section,
        className
      )}
    >
      {title && <HeadingTag id={id ?? paramCase(title)}>{title}</HeadingTag>}
      {description && <p className={clsx(styles.sectionDescription)}>{description}</p>}
      <div className={clsx(styles.cardsSection)}>
        {items && 
          items.map(function (item, i) {
            return <Product {...item} key={i} />;
          })
        }
      </div>
    </div>
  );
}