import { Building2 } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

interface OfficesSectionProps {
  isActive: boolean;
  onActivate: () => void;
}

export const OfficesSection = ({ isActive, onActivate }: OfficesSectionProps) => {
  const navigate = useNavigate();

  const handleOfficeClick = (path: string) => {
    onActivate();
    navigate(path);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>OFFICES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
              isActive={isActive}
              onClick={() => handleOfficeClick('/office')}
            >
              <Building2 className="h-4 w-4" />
              <span>Company Office</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};