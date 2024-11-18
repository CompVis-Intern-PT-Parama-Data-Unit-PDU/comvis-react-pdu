import React from "react";
import { Clock } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AppSidebar from "@/components/app-sidebar";
import ModeToggle from "@/components/mode-toogle";
import { Separator } from "@/components/ui/separator";
import { Notif } from "@/components/notification";
import { Outlet, useLocation } from "react-router-dom";
import { nameMap } from "@/lib/pathMap";


export default function DashboardL() {
  const [open, setOpen] = React.useState(false);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getBreadcrumbName = (path) => {
    for (let pattern in nameMap) {
        const regex = new RegExp(`^${pattern.replace(/:[^\s/]+/g, '[^/]+')}$`);
        if (regex.test(path)) {
            return nameMap[pattern];
        }
    }
    return 'Page Not Found';
  };

  return (
    <>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <main className="w-full h-screen">
          <header className="flex bg-primary h-[7%] align-middle text-white justify-between">
            <div className="flex space-x-2">
              <SidebarTrigger className="my-auto" />
              <Separator
                orientation="vertical"
                className="my-auto h-6 bg-white"
              />
              <Breadcrumb className="my-auto">
                <BreadcrumbList>
                  <BreadcrumbItem>
                      {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                          <BreadcrumbPage key={to} className="font-semibold text-white">
                            {getBreadcrumbName(to)}
                          </BreadcrumbPage>
                        ) : (
                          <React.Fragment key={to}>
                            <BreadcrumbItem className="hidden md:block">
                              <BreadcrumbLink href={to} className="text-white font-semibold">
                              {getBreadcrumbName(to)}
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block text-white font-semibold" />
                          </React.Fragment>
                        );
                      })}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex space-x-2  my-auto">
              <Clock className="size-5" />
              <span className="text-sm">23:59:59 10-11-2024</span>
            </div>
            <div className="flex space-x-2 mr-1 my-auto">
              <Notif />
              <ModeToggle />
            </div>
          </header>
          <Outlet/>
        </main>
      </SidebarProvider>
    </>
  );
}
