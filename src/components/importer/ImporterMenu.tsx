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

  const handleImportAssignments = () => {
    chrome.tabs.create({ url: canvasCalenderURL.toString() }, (tab) => {});
  };

  return (
    <Card>
      <Button onClick={handleImportAssignments}>Import Assignments</Button>
      <CardContent>Be sure to be logged into Canvas</CardContent>
      {userNotAuthenticated && (
        <p className="text-sm font-medium text-destructive">
          Please login to Canvas first
        </p>
      )}
    </Card>
  );
}
