import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
import styles from "./modal.module.css";
import { ModalProps } from "../../types/modal";

const Modal: React.FC<ModalProps> = ({ children, show, hide }) => {
  useEscapeKey(hide);

  if (!show) return null;

  const onClickModalContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalBackground} onClick={hide}>
      <div className={styles.modalContent} onClick={onClickModalContent}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
