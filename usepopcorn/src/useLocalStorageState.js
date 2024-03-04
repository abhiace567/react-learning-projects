import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, localKey) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(localKey);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(localKey, JSON.stringify(value));
    },
    [value, localKey]
  );
  return [value, setValue];
}
