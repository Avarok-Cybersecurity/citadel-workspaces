import { Building2, Home } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const RoomsSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>ROOMS</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <Home className="h-4 w-4" />
              <span>Main Office</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <Building2 className="h-4 w-4" />
              <span>Meeting Room A</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <Building2 className="h-4 w-4" />
              <span>Meeting Room B</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};