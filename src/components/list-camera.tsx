import { Edit, Trash2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ListCamera() {
  const cameras = [
    {
      cameraName: "Camera 1",
      client: "Client A",
      site: "Site X",
      well: "Well 1",
    },
    {
      cameraName: "Camera 2",
      client: "Client B",
      site: "Site Y",
      well: "Well 2",
    },
    {
      cameraName: "Camera 3",
      client: "Client C",
      site: "Site Z",
      well: "Well 3",
    },
  ];

  return (
    <Card className="min-h-full ml-auto mr-2 border-primary">
      <CardHeader>
        <CardTitle className="text-2xl">List Camera</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">Camera Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Client</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Site</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Well</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cameras.map((camera, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{camera.cameraName}</td>
                <td className="border border-gray-200 px-4 py-2">{camera.client}</td>
                <td className="border border-gray-200 px-4 py-2">{camera.site}</td>
                <td className="border border-gray-200 px-4 py-2">{camera.well}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="sm" className="flex items-center">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
