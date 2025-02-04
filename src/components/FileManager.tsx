import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { FilePreviewDialog } from "@/components/layout/sidebar/FilePreviewDialog";
import { Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import type { FileMetadata } from "@/types/files";

// Import all files from the FilesSection component
import { files as sidebarFiles } from "@/components/layout/sidebar/FilesSection";

// Convert sidebar files to our FileMetadata format
const standardFiles = sidebarFiles.map(file => ({
  ...file,
  transferType: 'standard' as const,
}));

// Add the mock REVFS files with correct status type
const mockRevfsFiles = [
  {
    id: "revfs-1",
    name: "Secure Document.pdf",
    type: "PDF Document",
    size: 1500000,
    sender: {
      name: "Alice Smith",
      avatar: "https://github.com/shadcn.png"
    },
    receiver: {
      name: "Bob Johnson",
      avatar: "https://github.com/shadcn.png"
    },
    createdAt: "2024-03-20T15:30:00Z",
    url: "/files/secure.pdf",
    transferType: "revfs" as const,
    status: "pending" as const, // Fixed: Now using a valid status value
    virtualPath: "/home/alice/documents/secure.pdf",
    isLocallyStored: true
  }
];

const allFiles = [...standardFiles, ...mockRevfsFiles];

const FileManager = () => {
  const [selectedFile, setSelectedFile] = useState<FileMetadata | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [files, setFiles] = useState(allFiles);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showClearAllDialog, setShowClearAllDialog] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<FileMetadata | null>(null);
  const [dontAskDelete, setDontAskDelete] = useState(false);
  const [dontAskClearAll, setDontAskClearAll] = useState(false);
  const [clearAllType, setClearAllType] = useState<'standard' | 'revfs'>('standard');

  const handleFileClick = (file: FileMetadata) => {
    setSelectedFile(file);
    setIsPreviewOpen(true);
  };

  const handleDelete = (file: FileMetadata) => {
    if (dontAskDelete) {
      confirmDelete(file);
    } else {
      setFileToDelete(file);
      setShowDeleteDialog(true);
    }
  };

  const confirmDelete = (file: FileMetadata) => {
    setFiles(prev => prev.filter(f => f.id !== file.id));
    toast.success(`Deleted file: ${file.name}`);
  };

  const handleClearAll = (type: 'standard' | 'revfs') => {
    if (dontAskClearAll) {
      confirmClearAll(type);
    } else {
      setClearAllType(type);
      setShowClearAllDialog(true);
    }
  };

  const confirmClearAll = (type: 'standard' | 'revfs') => {
    setFiles(prev => prev.filter(f => f.transferType !== type));
    toast.success(`All ${type} files cleared`);
  };

  const FileList = ({ files, type }: { files: FileMetadata[], type: 'standard' | 'revfs' }) => (
    <ScrollArea className="h-[600px]">
      <div className="space-y-4 p-4">
        {files.filter(f => f.transferType === type).map((file) => (
          <button
            key={file.id}
            onClick={() => handleFileClick(file)}
            className="w-full text-left flex items-center justify-between p-4 rounded-lg bg-[#343A5C] hover:bg-[#3F466B] transition-colors"
          >
            <div className="flex items-center space-x-4 flex-1">
              <Avatar className="h-10 w-10">
                <AvatarImage src={file.sender.avatar} />
                <AvatarFallback>{file.sender.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{file.name}</p>
                <p className="text-sm text-gray-400 truncate">
                  {type === 'revfs' && file.virtualPath ? file.virtualPath : file.type}
                </p>
              </div>
              {file.receiver && (
                <Avatar className="h-10 w-10">
                  <AvatarImage src={file.receiver.avatar} />
                  <AvatarFallback>{file.receiver.name[0]}</AvatarFallback>
                </Avatar>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(file);
              }}
              className="ml-4 hover:bg-red-500 hover:text-white"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </button>
        ))}
      </div>
    </ScrollArea>
  );

  return (
    <div className="p-6 bg-[#444A6C] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">File Manager</h1>
        
        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#343A5C]">
            <TabsTrigger
              value="standard"
              className="data-[state=active]:bg-[#E5DEFF] data-[state=active]:text-[#343A5C]"
            >
              Standard Files
            </TabsTrigger>
            <TabsTrigger
              value="revfs"
              className="data-[state=active]:bg-[#E5DEFF] data-[state=active]:text-[#343A5C]"
            >
              RE-VFS Files
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard" className="mt-6">
            <div className="bg-[#262C4A]/95 rounded-lg p-4">
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  onClick={() => handleClearAll('standard')}
                  className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#E5DEFF]/90"
                >
                  Clear All
                </Button>
              </div>
              <FileList files={files} type="standard" />
            </div>
          </TabsContent>
          
          <TabsContent value="revfs" className="mt-6">
            <div className="bg-[#262C4A]/95 rounded-lg p-4">
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  onClick={() => handleClearAll('revfs')}
                  className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#E5DEFF]/90"
                >
                  Clear All
                </Button>
              </div>
              <FileList files={files} type="revfs" />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <FilePreviewDialog
        file={selectedFile}
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setSelectedFile(null);
        }}
      />

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="bg-[#444A6C] border-[#262C4A] text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              This action cannot be undone. This will permanently delete the file.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center space-x-2 py-4">
            <Checkbox
              id="dontAskDelete"
              checked={dontAskDelete}
              onCheckedChange={(checked) => setDontAskDelete(checked as boolean)}
            />
            <label
              htmlFor="dontAskDelete"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Don't ask next time
            </label>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-600 text-white hover:bg-gray-700">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (fileToDelete) {
                  confirmDelete(fileToDelete);
                }
                setShowDeleteDialog(false);
              }}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showClearAllDialog} onOpenChange={setShowClearAllDialog}>
        <AlertDialogContent className="bg-[#444A6C] border-[#262C4A] text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Clear all files?</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              This action cannot be undone. This will permanently delete all {clearAllType} files.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center space-x-2 py-4">
            <Checkbox
              id="dontAskClearAll"
              checked={dontAskClearAll}
              onCheckedChange={(checked) => setDontAskClearAll(checked as boolean)}
            />
            <label
              htmlFor="dontAskClearAll"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Don't ask next time
            </label>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-600 text-white hover:bg-gray-700">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                confirmClearAll(clearAllType);
                setShowClearAllDialog(false);
              }}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Clear All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FileManager;