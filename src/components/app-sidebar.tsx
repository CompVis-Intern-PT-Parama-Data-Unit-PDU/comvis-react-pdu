import { NavLink } from "react-router-dom";
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
      url: "/dashboard/cutting-monitoring",
      icon: Webcam,
    },
    {
      title: "Drilling Console",
      url: "/dashboard/drilling-console",
      icon: Gauge,
    },
  ],
  services: [
    {
      name: "EyeLog",
      logo: ScanEye,
      desc: "Computer Vision Monitoring",
      url: "/dashboard",
    },
    {
      name: "OCR & Data Extraction",
      logo: ScanText,
      desc: "OCR & Data Extraction",
      url: "https://tedi.sv.ugm.ac.id/id/muka/"
    },
    {
      name: "Early Warning System",
      logo: Siren,
      desc: "Real-time Alerts",
      url: "https://tedi.sv.ugm.ac.id/id/muka/"
    },
  ],
  admin: [
    {
      title: "User Management",
      url: "/dashboard/user-management",
      icon: UserCog,

    },
    {
      title: "System Health",
      url: "/dashboard/system-health",
      icon: HeartPulse,
    },
    {
      title: "Camera Management",
      url: "/dashboard/camera-management",
      icon: Siren,
    },
  ],
  footer: [
    {
      title: "Support",
      url: "/dashboard/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/dashboard/feedback",
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
    <Sidebar collapsible="icon" >
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
              <NavLink to="/dashboard">
                <Home />
                <span>Dashboard</span>
              </NavLink>
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
