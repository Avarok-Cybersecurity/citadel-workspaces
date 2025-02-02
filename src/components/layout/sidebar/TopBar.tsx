import { Bell, Menu, Plus, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface TopBarProps {
  currentWorkspace: string;
}

export const TopBar = ({ currentWorkspace }: TopBarProps) => {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-[#252424] border-b border-gray-800 flex items-center justify-between px-4 z-50">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C] md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <span className="font-semibold truncate">{currentWorkspace}</span>
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
  );
};