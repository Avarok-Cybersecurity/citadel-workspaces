import { useState } from "react";
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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#444A6C] text-white">
        <TopBar currentWorkspace={currentWorkspace} />

        <Sidebar className="pt-14 bg-[#262C4A]">
          <SidebarContent>
            <OfficesSection />
            <RoomsSection />
            <MessagesSection />
            <FilesSection />
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 pt-14 pl-[var(--sidebar-width)] p-0">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};