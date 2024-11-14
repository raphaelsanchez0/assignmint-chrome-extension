import ImporterMenu from "@/components/importer/ImporterMenu";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useChromeStorage from "@/hooks/useStorage";
import { Constants } from "@/lib/constants";

export default function Popup() {
  const canvasURL = useChromeStorage<URL>(
    Constants.chromeStorageKeys.canvasURL
  );

  return (
    <div className="min-w-[256px] min-h-[256px] bg-background rounded-xl">
      <CardHeader>
        <CardTitle>Assignmint Canvas Importer</CardTitle>
      </CardHeader>
      <CardContent>
        {canvasURL && <ImporterMenu canvasURL={canvasURL} />}
      </CardContent>
    </div>
  );
}
