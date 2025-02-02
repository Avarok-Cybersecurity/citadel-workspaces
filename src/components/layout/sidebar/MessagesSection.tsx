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

interface MessagesSectionProps {
  isActive: boolean;
  onActivate: () => void;
}

export const MessagesSection = ({ isActive, onActivate }: MessagesSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentChannel = new URLSearchParams(location.search).get("channel");

  const handleChannelClick = (channelId: string) => {
    onActivate();
    navigate(`/messages?channel=${channelId}`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {messageChannels.map((channel) => (
            <SidebarMenuItem key={channel.id}>
              <SidebarMenuButton
                className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
                isActive={isActive && currentChannel === channel.id}
                onClick={() => handleChannelClick(channel.id)}
              >
                <Avatar className="h-4 w-4">
                  <AvatarImage src={channel.avatar} />
                  <AvatarFallback>
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