import { ChangeEvent } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
}
