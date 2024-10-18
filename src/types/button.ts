import React from "react";

export enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariantEnum;
}
