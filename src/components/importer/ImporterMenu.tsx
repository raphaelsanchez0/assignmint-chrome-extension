import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function ImporterMenu({ canvasURL }: { canvasURL: URL }) {
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
    </Card>
  );
}
