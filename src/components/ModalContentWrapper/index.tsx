import React from "react";
import styles from "./modalContentWrapper.module.css";
import CloseIcon from "../vectors/close";
import { ModalContentWrapperProps } from "../../types/modal";

const ModalContentWrapper: React.FC<ModalContentWrapperProps> = ({
  children,
  label,
  cancelHandler,
}) => {
  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.header}>
        <h3>{label}</h3>
        <button className={styles.cancelBtn} onClick={cancelHandler}>
          <CloseIcon />
        </button>
      </div>
      {children}
    </div>
  );
};

export default ModalContentWrapper;
