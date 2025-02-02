import { FileText } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface FilesSectionProps {
  isActive: boolean;
  onActivate: () => void;
}

export const FilesSection = ({ isActive, onActivate }: FilesSectionProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>FILES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors"
              isActive={isActive}
              onClick={onActivate}
            >
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};