import { MessageSquare } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const MessagesSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Team Chat</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Project Updates</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>General Discussion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};