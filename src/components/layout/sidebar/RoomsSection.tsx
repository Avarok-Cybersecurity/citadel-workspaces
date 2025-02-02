import { Building2, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const officeRooms = {
  company: [
    { id: "main", name: "Main Office", icon: Home },
    { id: "meeting-a", name: "Meeting Room A", icon: Building2 },
    { id: "meeting-b", name: "Meeting Room B", icon: Building2 },
  ],
  marketing: [
    { id: "creative", name: "Creative Studio", icon: Home },
    { id: "conference", name: "Conference Room", icon: Building2 },
    { id: "media", name: "Media Room", icon: Building2 },
  ],
  hr: [
    { id: "training", name: "Training Room", icon: Home },
    { id: "interview-a", name: "Interview Room A", icon: Building2 },
    { id: "interview-b", name: "Interview Room B", icon: Building2 },
  ],
};

export const RoomsSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentSection = new URLSearchParams(location.search).get("section") || "company";
  const currentRoom = new URLSearchParams(location.search).get("room");
  
  const handleRoomClick = (roomId: string) => {
    const params = new URLSearchParams(location.search);
    params.set("room", roomId);
    navigate(`/office?${params.toString()}`);
  };

  const rooms = officeRooms[currentSection as keyof typeof officeRooms] || [];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>ROOMS</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <div className="animate-fade-in animate-slide-in">
            {rooms.map((room, index) => (
              <SidebarMenuItem 
                key={room.id}
                className="transition-all duration-200"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  opacity: 0,
                  animation: `fade-in 0.3s ease-out ${index * 50}ms forwards, slide-in 0.3s ease-out ${index * 50}ms forwards`
                }}
              >
                <SidebarMenuButton 
                  className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
                  onClick={() => handleRoomClick(room.id)}
                  data-active={currentRoom === room.id}
                >
                  <room.icon className="h-4 w-4" />
                  <span>{room.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};