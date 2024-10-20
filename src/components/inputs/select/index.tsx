import React, { useState, ChangeEvent } from "react";
import styles from "./select.module.css";
import { SelectProps } from "../../../types/select";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event);
  };

  return (
    <div className={styles.selectWrapper}>
      {label && (
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
      )}
      <select
        id={label}
        value={selectedValue}
        onChange={handleChange}
        className={styles.select}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
