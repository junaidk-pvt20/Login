import classNames from "classnames";
import React, { useMemo } from "react";
import { Button } from "reactstrap";
import styles from "./Button.module.scss";

const Index = (props) => {
  const className = useMemo(() => {
    if (props?.outline) {
      return styles.outlineButton;
    } else {
      return styles.primaryButton;
    }
  }, [props?.outline]);

  return (
    <Button
      {...props}
      className={classNames(styles.button, props?.className, className)}
      disabled={props?.disabled ? props.disabled :false}
    >
      {props?.label}
    </Button>
  );
};

export default Index;
