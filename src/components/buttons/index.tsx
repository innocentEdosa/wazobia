import React from "react";
import { ButtonProps, ButtonVariantEnum } from "../../types/button";
import styles from "./button.module.css"

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled,
  variant = ButtonVariantEnum.PRIMARY,
}) => {
  return (
    <button
      data-variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
