import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import styles from "./PreLogin.module.scss";
import LOGO from "../../assets/images/whiteLogo.png";
import COMA from "../../assets/images/coma.png";

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
