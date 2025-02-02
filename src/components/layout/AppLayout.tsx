import { useState } from "react";
import { Bell, Building2, FileText, Folder, Home, MessageSquare, Plus, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [currentWorkspace] = useState("AVAROK CYBERSECURITY");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#444A6C] text-white">
        {/* Top Bar */}
        <div className="fixed top-0 left-0 right-0 h-14 bg-[#252424] border-b border-gray-800 flex items-center justify-between px-4 z-50">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">{currentWorkspace}</span>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
            >
              <Bell className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
            >
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar className="pt-14 bg-[#262C4A]">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>OFFICES</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <User className="h-4 w-4" />
                      <span>Company</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <User className="h-4 w-4" />
                      <span>PR/Marketing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <User className="h-4 w-4" />
                      <span>Human Resources</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

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

            <SidebarGroup>
              <SidebarGroupLabel>ROOMS</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <Home className="h-4 w-4" />
                      <span>Main Office</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <Building2 className="h-4 w-4" />
                      <span>Meeting Room A</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <Building2 className="h-4 w-4" />
                      <span>Meeting Room B</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Team Chat</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Project Updates</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>General Discussion</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 pt-14 pl-[var(--sidebar-width)] p-0">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};