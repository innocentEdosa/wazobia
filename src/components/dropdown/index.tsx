import useElementToggle from "../../hooks/useElementToggle";
import { useState, useEffect } from "react";
import { DropdownProps } from "../../types/dropdown";
import styles from "./dropdown.module.css";
import ChevronDown from "../vectors/chevronDown";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Paragraph ",
}) => {
  const { dropdownRef, isOpen, toggleIsOpenHandler, closeHandler } =
    useElementToggle();

    const [displayedValue, setDisplayedValue] = useState(value) 

    useEffect(() => {
      setDisplayedValue(value)
    }, [])

  const handleOptionClick = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setDisplayedValue(optionValue);
    closeHandler?.();
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        type="button"
        className={styles.toggle}
        onClick={toggleIsOpenHandler}
      >
        {displayedValue
          ? options.find((option) => option.value === displayedValue)?.label
          : placeholder}
        <ChevronDown />
      </button>
      {
        <ul data-isopen={isOpen} className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={styles.menuItem}
            >
              {option.label}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Dropdown;
