import { type LucideIcon } from "lucide-react"
import { NavLink } from "react-router-dom"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  feats,
}: {
  feats: {
    title: string
    url: string
    icon: LucideIcon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Features</SidebarGroupLabel>
      <SidebarMenu>
        {feats.map((feat) => (
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={feat.title}>
                <NavLink to={feat.url}>
                  <feat.icon />
                  <span>{feat.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
