import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCanvasURL() {
  chrome.storage.sync.get(["canvasUrl"], (res) => {
    if (res.canvasUrl === null || res.canvasUrl === "") {
      throw new Error("No canvas URL is set");
    }
    return res;
  });
}
