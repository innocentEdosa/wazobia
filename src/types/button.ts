import React from "react";

export enum ButtonVariantEnum {
  PRIMARY = "primary",
}

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariantEnum;
}
