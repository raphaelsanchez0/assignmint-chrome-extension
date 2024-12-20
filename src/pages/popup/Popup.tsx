import ImporterMenu from "@/components/importer/ImporterMenu";
import NoCanvasUrlError from "@/components/no-canvas-url-error/NoCanvasUrlError";
import { CardHeader, CardTitle } from "@/components/ui/card";

import { getCanvasURL } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Popup() {
  const [canvasURL, setCanvasURL] = useState<URL | null>(null);

  useEffect(() => {
    const fetchURL = async () => {
      const url = await getCanvasURL();
      setCanvasURL(new URL(url));
    };
    fetchURL();
  });

  return (
    <div className="min-w-[256px] min-h-[256px] bg-background rounded-xl">
      <CardHeader>
        <CardTitle>Assignmint Canvas Importer</CardTitle>
      </CardHeader>
      {canvasURL ? (
        <ImporterMenu canvasURL={canvasURL} />
      ) : (
        <NoCanvasUrlError />
      )}
    </div>
  );
}
