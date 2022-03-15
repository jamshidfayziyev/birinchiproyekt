import { useEffect, useState } from "react";

const useDebounce = (cb, timeout) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(id);
    };
  }, [id]);

  return (...p) => {
    if (id) clearTimeout(id);
    setId(
      setTimeout(() => {
        cb(...p);
      }, timeout)
    );
  };
};

export default useDebounce;
