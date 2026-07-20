import React from "react";
import Link from "@docusaurus/Link";
import clsx from 'clsx';
import styles from "./index.module.css";
import { getDocPath, titleFromSlug } from "../../../util";

const ActionButtons = ({ actions }) => {
  return (
    <div className={styles.buttonsContainer}>
     {actions.map((action, idx) => {
       const isPrimary = action.style ? action.style : 'primary';
       const buttonClass = isPrimary ? 'button--primary' : 'button--outline';

       return (
         <Link
           className={clsx("button button--lg", buttonClass)}
           to={action._template == 'link' ? action.href : getDocPath(action.document)}
           key={idx}
         >
           {action.title
             ? action.title
             : titleFromSlug(action.document)}
         </Link>
       );
     })}
    </div>
  );
};

export default ActionButtons;
