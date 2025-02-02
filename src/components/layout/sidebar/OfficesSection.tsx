import { Building2, Briefcase, Users } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";

interface OfficesSectionProps {
  isActive: boolean;
  onActivate: () => void;
}

export const OfficesSection = ({ isActive, onActivate }: OfficesSectionProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentSection = new URLSearchParams(location.search).get("section") || "company";

  const offices = [
    { id: "company", name: "Company Office", icon: Building2 },
    { id: "marketing", name: "PR/Marketing", icon: Briefcase },
    { id: "hr", name: "Human Resources", icon: Users },
  ];

  const handleOfficeClick = (officeId: string) => {
    onActivate();
    navigate(`/office?section=${officeId}`);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>OFFICES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {offices.map((office) => (
            <SidebarMenuItem key={office.id}>
              <SidebarMenuButton
                className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
                isActive={isActive && currentSection === office.id}
                onClick={() => handleOfficeClick(office.id)}
              >
                <office.icon className="h-4 w-4" />
                <span>{office.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};