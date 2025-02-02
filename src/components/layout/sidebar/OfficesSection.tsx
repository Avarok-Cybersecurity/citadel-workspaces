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
import { useSidebar } from "@/components/ui/sidebar";

export const OfficesSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setOpenMobile } = useSidebar();
  const currentSection = new URLSearchParams(location.search).get("section") || "company";

  const handleSectionClick = (section: string) => {
    navigate(`/office?section=${section}`, {
      state: { prevSection: currentSection }
    });
    setOpenMobile(false); // Close mobile sidebar after navigation
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#9b87f5] font-semibold">OFFICES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <div>
            {[
              { id: "company", label: "Company" },
              { id: "marketing", label: "PR/Marketing" },
              { id: "hr", label: "Human Resources" }
            ].map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton 
                  className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
                  onClick={() => handleSectionClick(item.id)}
                  data-active={currentSection === item.id}
                >
                  <User className="h-4 w-4" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};