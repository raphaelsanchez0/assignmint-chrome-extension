import { useEffect, useState } from "react";

export default function useChromeStorage(key: string) {
  const [value, setValue] = useState<string | null>(null);

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
