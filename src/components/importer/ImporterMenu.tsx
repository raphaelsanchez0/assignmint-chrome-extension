import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function ImporterMenu({ canvasURL }: { canvasURL: URL }) {
  const canvasCalenderURL = new URL("calendar#view_name=agenda", canvasURL);

  const handleImportAssignments = () => {};

  return (
    <Card>
      <Button onClick={handleImportAssignments}>Import Assignments</Button>
    </Card>
  );
}
