import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValues, cb) => {
  const [value, setValue] = useLocalStorage(key, initialValues);
  const body = document.querySelector("body");

  useEffect(() => {
    value
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  });
  return [value, setValue];
};
