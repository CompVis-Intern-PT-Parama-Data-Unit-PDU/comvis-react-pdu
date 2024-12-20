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
          <div className="relative">
            <select id="client" className="form-select appearance-none w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required>
              <option value="">Client</option>
              <option value="Client A">Client A</option>
              <option value="Client B">Client B</option>
              <option value="Client C">Client C</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="site" className="flex justify-between items-baseline">Site</Label>
          <div className="relative">
            <select id="site" className="form-select appearance-none w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required>
              <option value="">Site</option>
              <option value="Site X">Site X</option>
              <option value="Site Y">Site Y</option>
              <option value="Site Z">Site Z</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="well" className="flex justify-between items-baseline">Well</Label>
          <div className="relative">
            <select id="well" className="form-select appearance-none w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required>
              <option value="">Well</option>
              <option value="Well 1">Well 1</option>
              <option value="Well 2">Well 2</option>
              <option value="Well 3">Well 3</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
        </div>
  
            </ScrollArea>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}
