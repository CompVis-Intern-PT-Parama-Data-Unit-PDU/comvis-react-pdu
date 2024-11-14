import React from "react";
import {
  // Bell,
  Clock,
} from "lucide-react";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import AppSidebar from "@/components/app-sidebar";
import ModeToggle from "@/components/mode-toogle";
import { Separator } from "@/components/ui/separator";
import { Notif } from "@/components/notification";

export default function DashboardL({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  

  return (
    <>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <main className="w-full h-screen">
          <header className="flex bg-primary h-[7%] align-middle text-white justify-between">
            <div className="flex space-x-2">
            <SidebarTrigger className="my-auto"/>
            <Separator orientation="vertical" className="my-auto h-6 bg-white" />
            <Breadcrumb className="my-auto">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-white font-semibold">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-white font-semibold" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-white">Cutting Monitoring</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            </div>
              <div className="flex space-x-2  my-auto">
                <Clock className="size-5"/>
                <span className="text-sm">23:59:59 10-11-2024</span>
              </div>
            <div className="flex space-x-2 mr-1 my-auto">
              <Notif/>
              <ModeToggle/>
            </div>
          </header>
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
