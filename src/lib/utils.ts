import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Constants } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCanvasURL(): Promise<string> {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(["canvasUrl"], (res) => {
      if (res.canvasUrl === null || res.canvasUrl === "") {
        reject(new Error("No canvas URL is set"));
      } else {
        resolve(res.canvasUrl);
      }
    });
  });
}

export function setCanvasURL(url: URL | "") {
  chrome.storage.sync.set({
    [Constants.chromeStorageKeys.canvasURL]: url,
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
