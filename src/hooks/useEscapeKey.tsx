import { useEffect } from "react";

const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", closeOnEscapeKey);

    return () => document.removeEventListener("keydown", closeOnEscapeKey);
  }, [callback]);
};

export default useEscapeKey;
