import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import styles from "./PreLogin.module.scss";

const Index = () => {
  return (
    <div fluid={true} className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rightPanel}>
          <div className={styles.insideContainer}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Index);
