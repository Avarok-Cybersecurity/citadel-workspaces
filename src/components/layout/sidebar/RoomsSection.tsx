import { DoorOpen } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Room } from "@/types/office";

interface RoomsSectionProps {
  isActive: boolean;
  onActivate: () => void;
}

export const RoomsSection = ({ isActive, onActivate }: RoomsSectionProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>ROOMS</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
              isActive={isActive}
              onClick={onActivate}
            >
              <DoorOpen className="h-4 w-4" />
              <span>Meeting Room</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};