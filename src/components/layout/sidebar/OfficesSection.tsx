import { User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const OfficesSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentSection = new URLSearchParams(location.search).get("section") || "company";

  const handleSectionClick = (section: string) => {
    navigate(`/office?section=${section}`, {
      state: { prevSection: currentSection }
    });
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>OFFICES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
              onClick={() => handleSectionClick("company")}
              data-active={currentSection === "company"}
            >
              <User className="h-4 w-4" />
              <span>Company</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
              onClick={() => handleSectionClick("marketing")}
              data-active={currentSection === "marketing"}
            >
              <User className="h-4 w-4" />
              <span>PR/Marketing</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
              onClick={() => handleSectionClick("hr")}
              data-active={currentSection === "hr"}
            >
              <User className="h-4 w-4" />
              <span>Human Resources</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};