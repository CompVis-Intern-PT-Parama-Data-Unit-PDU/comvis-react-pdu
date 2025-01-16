import { Camera, columns } from "@/components/datacam-columns"
import { DataTableCam } from "@/components/datacam-table"
import { camData } from "@/lib/camData" 
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ListCam() {
  return (
    <Card className="min-h-full mr-auto ml-2 border-primary">
      <CardHeader>
        <CardTitle className="text-2xl">List of Camera</CardTitle>
        <CardDescription>
          List of cameras that are currently connected to the system
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <DataTableCam 
          columns={columns} 
          data={camData as Camera[]} 
          updateData={(rowIndex, columnId, value) => {
            // Implement the updateData function here
            console.log(`Update row ${rowIndex}, column ${columnId} with value ${value}`);
          }} 
        />
      </CardContent>
    </Card>
  )
}