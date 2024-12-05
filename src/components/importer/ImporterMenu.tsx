import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CardDescription, CardFooter } from "../ui/card";
import { Constants } from "@/lib/constants";
import { set } from "react-hook-form";

export default function ImporterMenu({ canvasURL }: { canvasURL: URL }) {
  const [currentURL, setCurrentURL] = useState<string | null>(null);
  const canvasCalenderURL = new URL(
    Constants.canvasAssignmentsURLPath,
    canvasURL
  );

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const url = activeTab.url;
      setCurrentURL(url!);
    });
  }, []);

  const isCanvasAssignmentUrl = currentURL?.includes(
    Constants.canvasAssignmentsURLPath
  );

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
      <CardDescription className="mb-2">
        {!isCanvasAssignmentUrl ? (
          <p>
            {" "}
            Be logged into Canvas then click{" "}
            <span className="font-bold text-black"> View Assignments</span> to
            start
          </p>
        ) : (
          <p className="text-left">Import Assignments</p>
        )}
      </CardDescription>
      <div className="flex">
        {!isCanvasAssignmentUrl ? (
          <Button onClick={handleCreateNewTab}>View Assignments</Button>
        ) : (
          <Button onClick={handleImportAssignments}>Import</Button>
        )}
      </div>
    </CardFooter>
  );
}
