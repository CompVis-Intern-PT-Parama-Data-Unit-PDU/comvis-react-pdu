import {
  Gauge,
  Webcam,
  ScanEye,
  ScanText,
  Siren,
  UserCog,
  HeartPulse,
  LifeBuoy,
  Send,
  Home,
} from "lucide-react";
import Logo from "@/assets/icons/pdu.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { ServiceSwitcher } from "@/components/service-switcher";
import { NavMain } from "@/components/nav-main";
import { NavAdmin } from "@/components/nav-admin";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { Separator } from "@/components/ui/separator";

const data = {
  feats: [
    {
      title: "Cutting Monitoring",
      url: "#",
      icon: Webcam,
    },
    {
      title: "Drilling Console",
      url: "#",
      icon: Gauge,
    },
  ],
  services: [
    {
      name: "EyeLog",
      logo: ScanEye,
      desc: "Computer Vision Monitoring",
    },
    {
      name: "DataWave",
      logo: ScanText,
      desc: "OCR & Data Extraction",
    },
    {
      name: "Alertify",
      logo: Siren,
      desc: "Real-time Alerts",
    },
  ],
  admin: [
    {
      title: "User Management",
      url: "#",
      icon: UserCog,
    },
    {
      title: "System Health",
      url: "#",
      icon: HeartPulse,
    },
  ],
  footer: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  user: {
    name: "Raisal Admin",
    email: "raisal@ugm.com",
    avatar: "/src/assets/icons/avatar.jpg",
  },
};
export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="text-3xl font-bold align-middle">
            <img
              src={Logo}
              alt="Logo"
              className="size-10"

            />
            <div>
            <span className="">PDU</span>
            </div>
          </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
        <Separator className="bg-primary" />
        <ServiceSwitcher services={data.services} />
        <Separator className="bg-primary" />
        <div className="flex space-x-2 align-middle p-1 w-1/2">
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem className="px-2 mt-1">
            <SidebarMenuButton asChild tooltip={"Dashboard"}>
              <a href="#">
                <Home />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain feats={data.feats} />
        <NavAdmin feats={data.admin} />
        <NavSecondary feats={data.footer} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
