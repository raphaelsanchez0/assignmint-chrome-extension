import { useEffect, useState } from "react";

export default function useChromeStorage<T>(key: string) {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        chrome.storage.sync.get([key], (res) => {
          setValue(res[key]);
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [key]);

  return value;
}
