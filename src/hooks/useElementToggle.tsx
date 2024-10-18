import { useState, useRef, useEffect } from "react";

const useElementToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);


  const toggleIsOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const closeHandler = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return {
    setIsOpen,
    isOpen,
    dropdownRef,
    toggleIsOpenHandler,
    closeHandler,
  };
};

export default useElementToggle;
