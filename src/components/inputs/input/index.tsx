import InputProps from "../../../types/textField";
import { InputVariant } from "../../../types/textField";
import styles from "./input.module.css";

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  onChange,
  value,
  variant = InputVariant.SECONDARY,
  placeholder,
  ...rest
}) => {
  return (
    <label>
      {label && <span className={styles.label}>{label}</span>}
      <input
        data-variant={variant}
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        {...rest}
      />
    </label>
  );
};

export default Input;
