import { MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router-dom";

export const messageChannels = [
  {
    id: "team-chat",
    name: "Kathy McCooper",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "project-updates",
    name: "Project Updates",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "general-discussion",
    name: "General Discussion",
    avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  }
];

export const MessagesSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentChannel = new URLSearchParams(location.search).get("channel");

  const handleMessageClick = (channelId: string) => {
    const params = new URLSearchParams(location.search);
    params.set("channel", channelId);
    navigate(`/messages?${params.toString()}`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {messageChannels.map((channel) => (
            <SidebarMenuItem key={channel.id}>
              <SidebarMenuButton
                className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-all duration-300 ease-in-out"
                isActive={currentChannel === channel.id}
                onClick={() => handleMessageClick(channel.id)}
              >
                <Avatar className="h-4 w-4 transition-opacity duration-300 ease-in-out">
                  <AvatarImage 
                    src={channel.avatar} 
                    className="transition-opacity duration-300 ease-in-out"
                  />
                  <AvatarFallback className="transition-opacity duration-300 ease-in-out">
                    <MessageSquare className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span>{channel.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};