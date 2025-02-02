import { FileText, Folder } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export const FilesSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>FILES</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <FileText className="h-4 w-4" />
              <span>Q4 Report.pdf</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <FileText className="h-4 w-4" />
              <span>Project Timeline.xlsx</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <FileText className="h-4 w-4" />
              <span>Meeting Notes.docx</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
              <Folder className="h-4 w-4" />
              <span>File Manager</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};