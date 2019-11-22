import { useState, useEffect } from 'react';

// Helper function to delay API call to Giphy until user stops typing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to passed in value after delay time given. 
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay)

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;