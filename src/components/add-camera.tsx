import { CompanyS, SiteS, WellS } from "@/components/dropdown-nested";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AddCam() {
  return (
    <Card className="ml-auto h-full mr-2 w-1/3 border-primary">
      <CardHeader>
        <CardTitle className="text-2xl">Add a Camera</CardTitle>
        <CardDescription>
          Fill out the form to add a camera to list table
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <ScrollArea className="rounded-md h-full">
            <div className="grid gap-2">
              <Label
                htmlFor="camera-name"
                className="flex justify-between items-baseline"
              >
                Camera Name
              </Label>
              <Input
                id="camera-name"
                type="text"
                placeholder="Camera XXX-XX-00-00X"
                required
              />
            </div>
            <div className="grid gap-2 mt-3">
              <Label
                htmlFor="ip-address"
                className="flex justify-between items-baseline"
              >
                IP Address
              </Label>
              <Input
                id="ip-address"
                type="text"
                placeholder="rtmp://0.0.0.0:PORT/live/STREAM_NAME"
                required
              />
            </div>
            <div className="grid gap-2 mt-3">
              <Label
                htmlFor="company-name"
                className="flex justify-between items-baseline"
              >
                Company
              </Label>
              <CompanyS className="w-full"/>
            </div>
            <div className="grid gap-2 mt-3">
              <Label
                htmlFor="company-name"
                className="flex justify-between items-baseline"
              >
                Company
              </Label>
              <SiteS className="w-full" />
            </div>
            <div className="grid gap-2 mt-3">
              <Label
                htmlFor="well-name"
                className="flex justify-between items-baseline"
              >
                Well
              </Label>
              <WellS className="w-full" />
            </div>
          </ScrollArea>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
