import { useEffect, useState } from "react";

function useDebounce(value:any, delay:any) {
  const [debouncedvalue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return ()=> clearTimeout(handler)

    
  }, [value,delay]);
  return debouncedvalue;
}

export default useDebounce;
