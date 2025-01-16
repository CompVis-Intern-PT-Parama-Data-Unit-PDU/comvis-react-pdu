import { ListCam } from "@/components/list-camera"
import { AddCam } from "@/components/add-camera"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area";

export default function UserManagement() {
  return (
      <div className="h-[93%] flex flex-col justify-between">
        <div>
        <nav className="flex p-4 bg-sidebar  align-middle">
          <h1 className="font-semibold text-lg my-auto">
            Camera Management
          </h1>
        </nav>
        <Separator className="bg-sidebar-primary" />
        <ScrollArea className="h-[calc(100%-4rem)]">
        <main className="flex justify-center py-4 h-full">
            <AddCam/>
            <ListCam/>
        </main>
        </ScrollArea>
        </div>
      </div>
  )
}
