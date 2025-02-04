import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { FilePreviewDialog } from "@/components/layout/sidebar/FilePreviewDialog";
import { Check, Download, Folder, Trash, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import type { FileMetadata, FileSystemNode } from "@/types/files";

// Mock data - replace with actual data fetching
const mockFiles: FileMetadata[] = [
  {
    id: "standard-1",
    name: "Project Report.pdf",
    type: "PDF Document",
    size: 2500000,
    sender: {
      name: "John Doe",
      avatar: "https://github.com/shadcn.png"
    },
    createdAt: "2024-03-20T14:30:00Z",
    url: "/files/report.pdf",
    transferType: "standard"
  },
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
    transferType: "revfs",
    status: "pending",
    virtualPath: "/home/alice/documents/secure.pdf",
    isLocallyStored: true
  }
];

const FileManager = () => {
  const [selectedFile, setSelectedFile] = useState<FileMetadata | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleFileClick = (file: FileMetadata) => {
    setSelectedFile(file);
    setIsPreviewOpen(true);
  };

  const handleFileAction = (file: FileMetadata, action: 'accept' | 'deny' | 'delete' | 'download') => {
    switch (action) {
      case 'accept':
        toast.success(`Accepted file: ${file.name}`);
        break;
      case 'deny':
        toast.success(`Denied file: ${file.name}`);
        break;
      case 'delete':
        toast.success(`Deleted file: ${file.name}`);
        break;
      case 'download':
        toast.success(`Downloading file: ${file.name}`);
        break;
    }
  };

  const FileList = ({ files, type }: { files: FileMetadata[], type: 'standard' | 'revfs' }) => (
    <ScrollArea className="h-[600px]">
      <div className="space-y-4 p-4">
        {files.filter(f => f.transferType === type).map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-4 rounded-lg bg-[#343A5C] hover:bg-[#3F466B] transition-colors"
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
            <div className="flex items-center space-x-2 ml-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleFileClick(file)}
                className="hover:bg-[#E5DEFF] hover:text-[#343A5C]"
              >
                <Folder className="h-4 w-4" />
              </Button>
              {type === 'revfs' && file.status === 'pending' && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleFileAction(file, 'accept')}
                    className="hover:bg-green-500 hover:text-white"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleFileAction(file, 'deny')}
                    className="hover:bg-red-500 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              )}
              {type === 'revfs' && !file.isLocallyStored && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleFileAction(file, 'download')}
                  className="hover:bg-[#E5DEFF] hover:text-[#343A5C]"
                >
                  <Download className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleFileAction(file, 'delete')}
                className="hover:bg-red-500 hover:text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
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
                  onClick={() => toast.success("All standard files cleared")}
                  className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#E5DEFF]/90"
                >
                  Clear All
                </Button>
              </div>
              <FileList files={mockFiles} type="standard" />
            </div>
          </TabsContent>
          
          <TabsContent value="revfs" className="mt-6">
            <div className="bg-[#262C4A]/95 rounded-lg p-4">
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  onClick={() => toast.success("All RE-VFS files cleared")}
                  className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#E5DEFF]/90"
                >
                  Clear All
                </Button>
              </div>
              <FileList files={mockFiles} type="revfs" />
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
    </div>
  );
};

export default FileManager;