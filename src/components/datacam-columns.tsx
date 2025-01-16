import { ColumnDef } from "@tanstack/react-table"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CompanyS, SiteS, WellS } from "./dropdown-nested"

export type Camera = {
  id: string,
  name: string,
  ip: string,
  company: string,
  site: string,
  well: string
}

export const columns: ColumnDef<Camera>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ip",
    header: "IP",
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => <CompanyS className="w-full" />,
  },
  {
    accessorKey: "site",
    header: "Site",
    cell: ({ row }) => <SiteS className="w-full" />,
  },
  {
    accessorKey: "well",
    header: "Well",
    cell: ({ row }) => <WellS className="w-full" />,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
        const camera = row.original as Camera
        function handleDelete(camera: string) {
            if (confirm("Are you sure you want to delete this payment?")) {
              // Proses penghapusan payment di sini, misalnya API call.
              console.log(`Payment with ID ${camera} has been deleted.`);
            }
          }
        return (
            <Button onClick={()=> handleDelete(camera.id)}>
                <Trash2/>
            </Button>
        )
    }
  }
]
