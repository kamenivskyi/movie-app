import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("useLocalStorage error: ", error);
      return initialValue;
    }
  });

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    if (item) {
      setData(JSON.parse(item));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
