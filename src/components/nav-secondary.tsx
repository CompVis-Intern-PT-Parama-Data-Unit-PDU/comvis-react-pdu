import * as React from "react"
import { type LucideIcon } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  feats,
  ...props
}: {
  feats: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {feats.map((feat) => (
            <SidebarMenuItem key={feat.title}>
              <SidebarMenuButton asChild size="sm">
                <NavLink to={feat.url}>
                  <feat.icon />
                  <span>{feat.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
