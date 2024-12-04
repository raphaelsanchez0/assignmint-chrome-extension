import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Constants } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCanvasURL(): Promise<string> {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([Constants.chromeStorageKeys.canvasURL], (res) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(res[Constants.chromeStorageKeys.canvasURL]);
      }
    });
  });
}

export function setCanvasURL(url: URL) {
  chrome.storage.sync.set({
    [Constants.chromeStorageKeys.canvasURL]: url.origin,
  });
}

export function clearCanvasURL() {
  chrome.storage.sync.set({
    [Constants.chromeStorageKeys.canvasURL]: null,
  });
}

export function convertAssignmentsByDateToQueryString(assignmentsByDate: {
  [date: string]: string[];
}) {
  const params = new URLSearchParams();
  for (const [date, assignments] of Object.entries(assignmentsByDate)) {
    params.append(date, assignments.join(","));
  }
  return params.toString();
}
