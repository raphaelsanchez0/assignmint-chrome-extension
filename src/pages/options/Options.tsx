import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Trash, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import useChromeStorage from "@/hooks/useStorage";
import { Constants } from "@/lib/constants";
import { clearCanvasURL, setCanvasURL } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const canvasAPIFormSchema = z.object({
  canvasURL: z.string().url({ message: "Invalid url" }),
});

export default function Options() {
  const canvasURL =
    useChromeStorage(Constants.chromeStorageKeys.canvasURL)?.toString() ?? "";

  const canvasAPIForm = useForm<z.infer<typeof canvasAPIFormSchema>>({
    resolver: zodResolver(canvasAPIFormSchema),
    defaultValues: {
      canvasURL: canvasURL,
    },
  });

  const { reset } = canvasAPIForm;
  useEffect(() => {
    if (canvasURL) {
      reset({ canvasURL });
    }
  }, [canvasURL, reset]);

  function onSubmit(values: z.infer<typeof canvasAPIFormSchema>) {
    const url = new URL(values.canvasURL);
    setCanvasURL(url);
  }

  function handleClearCanvasURL() {
    clearCanvasURL();
    reset({ canvasURL: "" });
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-1/3 h-2/4">
        <CardHeader>
          <CardTitle>Canvas URL</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...canvasAPIForm}>
            <form
              onSubmit={canvasAPIForm.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={canvasAPIForm.control}
                name="canvasURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Canvas URL</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input placeholder="Canvas URL" {...field} />
                      </FormControl>
                      <Button onClick={handleClearCanvasURL}>
                        <Trash />
                      </Button>
                    </div>
                    <FormDescription>
                      Any link to your Canvas LMS when signed in
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
