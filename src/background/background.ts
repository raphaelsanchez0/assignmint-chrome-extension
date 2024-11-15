import { Constants } from "@/lib/constants";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    [Constants.chromeStorageKeys.canvasUnauthenticatedError]: false,
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.assignments) {
    console.log("test" + message.assignments);
  }
});
