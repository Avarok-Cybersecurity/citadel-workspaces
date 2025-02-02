import { DoorOpen } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { officeRooms } from "@/types/office";
import { useLocation, useNavigate } from "react-router-dom";

interface RoomsSectionProps {
  isActive: boolean;
  onActivate: () => void;
}

export const RoomsSection = ({ isActive, onActivate }: RoomsSectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentSection = new URLSearchParams(location.search).get("section") || "company";
  const currentRoom = new URLSearchParams(location.search).get("room");
  
  const rooms = officeRooms[currentSection as keyof typeof officeRooms] || [];

  const handleRoomClick = (roomId: string) => {
    onActivate();
    const params = new URLSearchParams(location.search);
    params.set("room", roomId);
    navigate(`/office?${params.toString()}`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>ROOMS</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {rooms.map((room) => (
            <SidebarMenuItem key={room.id}>
              <SidebarMenuButton
                className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
                isActive={isActive && currentRoom === room.id}
                onClick={() => handleRoomClick(room.id)}
              >
                <DoorOpen className="h-4 w-4" />
                <span>{room.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};