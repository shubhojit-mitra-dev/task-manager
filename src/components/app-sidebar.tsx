"use client"

import {
    House,
    Star,
    Check,
    ListTodo,
} from "lucide-react"
import * as React from "react"

import { NavProjects } from "@/components/nav-options"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Shubhojit Mitra",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  projects: [
    {
      name: "All Tasks",
      url: "/",
      icon: House,
    },
    {
      name: "Important",
      url: "/important",
      icon: Star,
    },
    {
      name: "Completed",
      url: "/completed",
      icon: Check,
    },
    {
        name: "Do it Now",
        url: "/incomplete",
        icon: ListTodo,
      },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
