import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";

interface Workspace {
  id: string;
  name: string;
  logoUrl: string;
}

const workspaces: Workspace[] = [
  {
    id: "1",
    name: "AVAROK CYBERSECURITY",
    logoUrl: "/lovable-uploads/cc2f58c1-680a-4b27-bbfe-f2ebe9c70797.png"
  },
  {
    id: "2",
    name: "ACME CORP",
    logoUrl: "/placeholder.svg"
  },
  {
    id: "3",
    name: "STARK INDUSTRIES",
    logoUrl: "/placeholder.svg"
  }
];

export const WorkspaceSwitcher = () => {
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [workspaceRoutes, setWorkspaceRoutes] = useState<Record<string, string>>({});
  const location = useLocation();
  const navigate = useNavigate();

  // Save current route when location changes
  useEffect(() => {
    setWorkspaceRoutes(prev => ({
      ...prev,
      [currentWorkspace.id]: location.pathname + location.search
    }));
  }, [location.pathname, location.search, currentWorkspace.id]);

  const handleWorkspaceChange = (workspace: Workspace) => {
    console.log('Switching to workspace:', workspace.name);
    const savedRoute = workspaceRoutes[workspace.id];
    console.log('Saved route for workspace:', savedRoute);
    
    // Animate out current content
    document.querySelector('.office-content')?.classList.add('animate-fade-out');

    // After animation, switch workspace and navigate
    setTimeout(() => {
      setCurrentWorkspace(workspace);
      setIsOpen(false);
      
      if (savedRoute) {
        navigate(savedRoute);
      } else {
        // Default route if none saved
        navigate('/office');
      }
      
      document.querySelector('.office-content')?.classList.remove('animate-fade-out');
      document.querySelector('.office-content')?.classList.add('animate-fade-in');
    }, 300);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 px-0 py-2 hover:bg-[#262C4A] transition-colors rounded-md w-full">
          <div className="flex items-center gap-3 pl-4">
            <img
              src={currentWorkspace.logoUrl}
              alt={currentWorkspace.name}
              className="w-8 h-8 rounded"
            />
            <span className="font-semibold text-white">{currentWorkspace.name}</span>
            <ChevronDown 
              className={cn(
                "w-5 h-5 transition-transform duration-300 text-white",
                isOpen && "rotate-180"
              )} 
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-[300px] bg-[#262C4A] border border-[#444A6C] -ml-4"
      >
        {workspaces
          .filter(workspace => workspace.id !== currentWorkspace.id)
          .map((workspace) => (
            <DropdownMenuItem
              key={workspace.id}
              onClick={() => handleWorkspaceChange(workspace)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#444A6C] text-white transition-colors cursor-pointer"
            >
              <img
                src={workspace.logoUrl}
                alt={workspace.name}
                className="w-8 h-8 rounded"
              />
              <span className="font-semibold">{workspace.name}</span>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};