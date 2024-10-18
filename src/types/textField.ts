import { ChangeEvent, InputHTMLAttributes } from "react";


export enum InputVariant {
    SECONDARY = "secondary",
    PRIMARY= "primary",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  variant?: InputVariant;
}

export default InputProps;
