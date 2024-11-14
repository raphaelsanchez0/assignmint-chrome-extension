import { Constants } from "@/lib/constants";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    [Constants.chromeStorageKeys.canvasUnauthenticatedError]: false,
  });
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log(tab);
});
