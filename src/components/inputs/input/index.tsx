import InputProps from "../../../types/textField";

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  onChange,
  value,
  ...rest
}) => {
  return (
    <label>
      {label && <span>{label}</span>}
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </label>
  );
};

export default Input;
