import React, { memo } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import closeModal from "../../assets/icons/closeModal.png";
import styles from "./Modal.module.scss";
import classNames from "classnames";

function Index(props) {
  const closeBtn = (
    <span className="close" onClick={props?.modal?.toggle} type="button">
      <img src={closeModal} alt="close icon" />
    </span>
  );

  return (
    <Modal
      {...props?.modal}
      className={classNames(
        styles.modal,
        props?.modal?.className,
        props?.modal?.position === "bottom" && styles?.modalBottom
      )}
      backdropClassName={classNames(
        styles.backdrop,
        props?.modal?.backdropClassName
      )}
      centered
      scrollable
      backdrop="static"
      keyboard={false}
    >
      <ModalHeader
        {...props?.header}
        className={classNames(styles.header, props?.header?.className)}
        close={props?.isClose ? closeBtn : ""}
        toggle={props?.isClose ? props?.modal?.toggle : ""}
      >
        {props?.header?.title}
        {props?.header?.component}
      </ModalHeader>
      <ModalBody className={classNames(styles.body, props?.body?.className)}>
        {props.children}
      </ModalBody>
      {props?.footer?.component && (
        <ModalFooter
          className={classNames(styles.footer, props?.footer?.className)}
        >
          {props?.footer?.component}
        </ModalFooter>
      )}
    </Modal>
  );
}

export default memo(Index);
