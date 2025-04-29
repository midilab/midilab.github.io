import React from "react";
import Link from "@docusaurus/Link";
import clsx from 'clsx';
import styles from "./index.module.css";
import { getDocPath, titleFromSlug } from "../../../util";

const ActionButtons = ({ actions }) => {
  return (
    <div className={styles.buttonsContainer}>
     {actions.map((action, idx)=>{
        return (
          <Link
            className={clsx("button", styles.buttons, action.className ?? "button--primary button--outline button--lg")}
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