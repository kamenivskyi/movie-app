import { useState, useEffect } from "react";

export const useStorage = ({
  key,
  initialValue,
  storageType = "localStorage",
}) => {
  const [data, setData] = useState(() => {
    try {
      const item = window[storageType].getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("useLocalStorage error: ", error);
      return initialValue;
    }
  });

  useEffect(() => {
    const item = window[storageType].getItem(key);

    if (item) {
      setData(JSON.parse(item));
    }
  }, [storageType, key]);

  useEffect(() => {
    window[storageType].setItem(key, JSON.stringify(data));
  }, [data, storageType, key]);

  return [data, setData];
};
