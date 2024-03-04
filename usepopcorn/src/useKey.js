import { useEffect } from "react";

export function useKey(keyPressed, action) {
  useEffect(
    function () {
      function closeCallback(e) {
        if (e.code.toLowerCase() === keyPressed.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", closeCallback);
      // cleanup function to avoid adding multiple event listner when element re renders
      return () => document.removeEventListener("keydown", closeCallback);
    },
    [keyPressed, action]
  );
}
