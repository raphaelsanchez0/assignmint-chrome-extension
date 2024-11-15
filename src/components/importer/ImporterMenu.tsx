import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import useChromeStorage from "@/hooks/useStorage";
import { Constants } from "@/lib/constants";

export default function ImporterMenu({ canvasURL }: { canvasURL: URL }) {
  const userNotAuthenticated = useChromeStorage<boolean>(
    Constants.chromeStorageKeys.canvasUnauthenticatedError
  );
  const canvasCalenderURL = new URL("calendar#view_name=agenda", canvasURL);

  const handleCreateNewTab = () => {
    chrome.tabs.create({ url: canvasCalenderURL.toString() }, (tab) => {
      if (tab?.id) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["/assets/content-scripts/canvas-scraper.js"],
        });
      }
    });
  };

  const handleImportAssignments = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab?.id) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab?.id },
          files: ["/assets/content-scripts/canvas-scraper.js"],
        });
      }
    });
  };

  return (
    <Card>
      <Button onClick={handleCreateNewTab}>Go to link</Button>
      <Button onClick={handleImportAssignments}>Scrape</Button>
      <CardContent>Be sure to be logged into Canvas</CardContent>
      {userNotAuthenticated && (
        <p className="text-sm font-medium text-destructive">
          Please login to Canvas first
        </p>
      )}
    </Card>
  );
}
