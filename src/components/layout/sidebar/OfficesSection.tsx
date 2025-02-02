import { User } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const OfficesSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>OFFICES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <User className="h-4 w-4" />
              <span>Company</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <User className="h-4 w-4" />
              <span>PR/Marketing</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <User className="h-4 w-4" />
              <span>Human Resources</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};