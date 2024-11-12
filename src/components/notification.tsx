import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Bell,
    AlertTriangle
  } from "lucide-react";
import { Separator } from "./ui/separator";

export function Notif() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-sidebar">
            <Bell/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-sidebar">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notification</h4>
            <p className="text-sm text-muted-foreground">
                You have 3 new notifications
            </p>
          </div>
          <Separator />
          <div className="grid gap-y-[10px]">
            <div className="flex align-middle rounded-lg py-1 px-3 outline outline-secondary space-x-3">
                <AlertTriangle className="my-auto"/>
                <div className="space-y-[2px]">
                    <h1 className="text-sm font-semibold">Heads up! Alert</h1>
                    <p className="text-[12px]">You can add components to your app using the cli.</p>
                </div>
            </div>
            <div className="flex align-middle rounded-lg py-1 px-3 outline outline-secondary space-x-3">
                <AlertTriangle className="my-auto"/>
                <div className="space-y-[2px]">
                    <h1 className="text-sm font-semibold">Heads up! Alert</h1>
                    <p className="text-[12px]">You can add components to your app using the cli.</p>
                </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
