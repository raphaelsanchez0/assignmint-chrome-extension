import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCanvasURL() {
  const url = chrome.storage.sync.get(["canvasUrl"], (res) => {
    res.canvasUrl;
  });
  console.log(url);

  if (url == null) {
    throw new Error("No canvas URL is set");
  }
  return url;
}
