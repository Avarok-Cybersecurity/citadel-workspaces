import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { TopBar } from "./sidebar/TopBar";
import { OfficesSection } from "./sidebar/OfficesSection";
import { RoomsSection } from "./sidebar/RoomsSection";
import { MessagesSection } from "./sidebar/MessagesSection";
import { FilesSection } from "./sidebar/FilesSection";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppContent = ({ children }: AppLayoutProps) => {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex w-full bg-[#444A6C] text-white">
      <TopBar currentWorkspace="AVAROK CYBERSECURITY" />

      <Sidebar className="pt-14 bg-[#262C4A] transition-transform duration-300 ease-in-out">
        <SidebarContent>
          <OfficesSection />
          <RoomsSection />
          <MessagesSection />
          <FilesSection />
        </SidebarContent>
      </Sidebar>

      <div className="flex-1 pt-14 pl-0 overflow-x-hidden">
        <div className="sticky top-14 z-40 h-14 bg-[#444A6C] border-b border-gray-700 flex items-center px-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C] md:hidden mr-4"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export const AppLayout = (props: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <AppContent {...props} />
    </SidebarProvider>
  );
};