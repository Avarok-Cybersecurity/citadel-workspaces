import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const handleWorkspaceChange = (workspace: Workspace) => {
    setCurrentWorkspace(workspace);
    setIsOpen(false);
    console.log('Switching to workspace:', workspace.name);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 px-4 py-2 hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors rounded-md">
          <img
            src={currentWorkspace.logoUrl}
            alt={currentWorkspace.name}
            className="w-8 h-8 rounded"
          />
          <span className="font-semibold">{currentWorkspace.name}</span>
          <ChevronDown 
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              isOpen && "rotate-180"
            )} 
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-[300px] bg-[#252424] border border-gray-800"
      >
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => handleWorkspaceChange(workspace)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#E5DEFF] hover:text-[#343A5C] transition-colors cursor-pointer"
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