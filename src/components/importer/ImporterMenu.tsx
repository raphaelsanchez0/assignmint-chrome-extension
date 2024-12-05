import { useEffect } from "react";
import { Button } from "../ui/button";
import { CardDescription, CardFooter } from "../ui/card";
import { Constants } from "@/lib/constants";

export default function ImporterMenu({ canvasURL }: { canvasURL: URL }) {
  const canvasCalenderURL = new URL(
    Constants.canvasAssignmentsURLPath,
    canvasURL
  );

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const url = activeTab.url;

      console.log(url);
    });
  }, []);

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
    <CardFooter className="flex flex-col">
      <CardDescription>Be sure to be logged into Canvas</CardDescription>
      <div className="flex">
        <Button onClick={handleCreateNewTab}>View Assignments</Button>
        <Button onClick={handleImportAssignments}>Import</Button>
      </div>
    </CardFooter>
  );
}
