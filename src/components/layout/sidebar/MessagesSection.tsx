import { Hash, MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const messageChannels = [
  { 
    id: "team-chat", 
    name: "Kathy McCooper", 
    icon: MessageCircle,
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
  },
  { 
    id: "project-updates", 
    name: "Project Updates", 
    icon: Hash,
    avatar: "/placeholder.svg" 
  },
  { 
    id: "general-discussion", 
    name: "General Discussion", 
    icon: Hash,
    avatar: "/placeholder.svg" 
  },
];

export const MessagesSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMessagesRoute = location.pathname === "/messages";

  return (
    <SidebarGroup>
      <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {messageChannels.map((channel) => (
            <SidebarMenuItem key={channel.id}>
              <SidebarMenuButton
                className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-all duration-300"
                onClick={() => navigate(`/messages?channel=${channel.id}`)}
                data-active={isMessagesRoute && new URLSearchParams(location.search).get("channel") === channel.id}
              >
                <channel.icon className="h-4 w-4 transition-colors duration-300" />
                <span>{channel.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};