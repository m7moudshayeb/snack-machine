import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const customRef = useRef();
  const ref = useRef();
  customRef.current = callback;
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      customRef.current();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  return ref;
};

export default useClickOutside;
