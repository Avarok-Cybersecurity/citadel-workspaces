import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { TopBar } from "./sidebar/TopBar";
import { OfficesSection } from "./sidebar/OfficesSection";
import { RoomsSection } from "./sidebar/RoomsSection";
import { MessagesSection } from "./sidebar/MessagesSection";
import { FilesSection } from "./sidebar/FilesSection";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [currentWorkspace] = useState("AVAROK CYBERSECURITY");
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(() => {
    // Initialize based on current route
    if (location.pathname.includes('office')) return 'offices';
    if (location.pathname.includes('messages')) return 'messages';
    return 'offices';
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#444A6C] text-white">
        <TopBar currentWorkspace={currentWorkspace} />

        <Sidebar className="pt-14 bg-[#262C4A]">
          <SidebarContent>
            <OfficesSection isActive={activeSection === 'offices'} onActivate={() => setActiveSection('offices')} />
            <RoomsSection isActive={activeSection === 'rooms'} onActivate={() => setActiveSection('rooms')} />
            <MessagesSection isActive={activeSection === 'messages'} onActivate={() => setActiveSection('messages')} />
            <FilesSection isActive={activeSection === 'files'} onActivate={() => setActiveSection('files')} />
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 pt-14 pl-0">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};