import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
//import { getCanvasURL } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const canvasAPIFormSchema = z.object({
  canvasURL: z.string().email({ message: "Invalid email" }),
});

export default function Options() {
  const [canvasUrl, setCanvasUrl] = useState<string>("");

  const handleSave = () => {
    const url = new URL(canvasUrl);
    chrome.storage.sync.set({ canvasUrl: url.origin });
  };

  const canvasAPIForm = useForm<z.infer<typeof canvasAPIFormSchema>>({
    resolver: zodResolver(canvasAPIFormSchema),
    defaultValues: {
      canvasURL: "",
    },
  });
  function getCanvasURL() {
    let url;
    chrome.storage.sync.get(["canvasUrl"], (res) => {
      url = res;
    });

    if (url == null) {
      throw new Error("No canvas URL is set");
    }

    return url;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-1/3 h-2/4">
        <CardHeader>
          <CardTitle>Canvas URL</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="url"
            placeholder="Any canvas URL you use to access your school's site"
            value={canvasUrl}
            onChange={(e) => setCanvasUrl(e.target.value)}
          />
          <Button onClick={handleSave}>Save</Button>
          <Button
            onClick={() => {
              chrome.storage.sync.get(["canvasUrl"], (res) => {
                console.log(res);
              });
            }}
          >
            Get Saved
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
