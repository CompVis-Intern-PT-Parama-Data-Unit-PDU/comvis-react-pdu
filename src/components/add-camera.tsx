import { Icons } from "@/assets/icons/icons";
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
import { ScrollArea } from "@/components/ui/scroll-area"

export function AddCamera() {
  return (
    <Card className="mr-auto h-full ml-2 w-1/3 border-primary">
    <CardHeader>
      <CardTitle className="text-2xl">Add Camera</CardTitle>
      <CardDescription>
        Fill out the form to add camera
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
                
    <ScrollArea className="rounded-md h-[260px]">
        <div className="grid gap-2">
          <Label htmlFor="camera-name" className="flex justify-between items-baseline">Camera Name</Label>
          <Input
            id="camera-name"
            type="text"
            placeholder="camera0011"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="ip-camera" className="flex justify-between items-baseline">IP Camera</Label>
          <Input
            id="ip-camera"
            type="text"
            placeholder="ipcamera0101"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="client" className="flex justify-between items-baseline">Client</Label>
          <Input
            id="client"
            type="text"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="site" className="flex justify-between items-baseline">Site</Label>
          <Input
            id="site"
            type="text"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="well" className="flex justify-between items-baseline">Well</Label>
          <Input
            id="well"
            type="text"
            required
          />
        </div>
            </ScrollArea>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}
