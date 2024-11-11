import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useChromeStorage from "@/hooks/useStorage";

export default function Popup() {
  const canvasURL = useChromeStorage("canvasUrl");

  return (
    <div className="min-w-[256px] min-h-[256px] bg-background rounded-xl">
      <CardHeader>
        <CardTitle>Assignmint Canvas Importer</CardTitle>
      </CardHeader>
      <CardContent>{canvasURL}</CardContent>
    </div>
  );
}
