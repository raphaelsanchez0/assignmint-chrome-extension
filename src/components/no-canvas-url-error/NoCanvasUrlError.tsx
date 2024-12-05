import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function NoCanvasUrlError() {
  return (
    <Card className="border-red-500 bg-red-100">
      <CardHeader>
        <CardTitle className="text-lg">No Canvas URL</CardTitle>
        <CardDescription>
          To import assignments, we need a link to your canvas.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => chrome.runtime.openOptionsPage()}>
          Options
        </Button>
      </CardFooter>
    </Card>
  );
}
