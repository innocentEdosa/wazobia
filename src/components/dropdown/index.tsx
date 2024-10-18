import useElementToggle from "../../hooks/useElementToggle";
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

  const handleOptionClick = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    closeHandler?.();
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        type="button"
        className={styles.toggle}
        onClick={toggleIsOpenHandler}
      >
        {value
          ? options.find((option) => option.value === value)?.label
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
