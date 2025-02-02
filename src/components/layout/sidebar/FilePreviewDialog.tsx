import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatFileSize } from "@/lib/utils";

interface FileDetails {
  id: string;
  name: string;
  type: string;
  size: number;
  sender: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  url: string;
}

interface FilePreviewDialogProps {
  file: FileDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FilePreviewDialog = ({ file, isOpen, onClose }: FilePreviewDialogProps) => {
  if (!file) return null;

  const handlePreview = () => {
    // Open file preview in new window for now
    window.open(file.url, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#444A6C] border-[#262C4A] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
            <FileText className="h-6 w-6" />
            FILE PREVIEW
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-300" />
            <span className="text-sm font-medium">SENT BY:</span>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={file.sender.avatar} />
                <AvatarFallback>
                  {file.sender.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span>{file.sender.name}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">FILENAME</span>
              <span className="flex-1 rounded-md bg-[#343A5C] px-4 py-2">
                {file.name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">CREATE DATE</span>
              <span className="flex-1 rounded-md bg-[#343A5C] px-4 py-2">
                {file.createdAt}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">FILE TYPE</span>
              <span className="flex-1 rounded-md bg-[#343A5C] px-4 py-2">
                {file.type}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">FILE SIZE</span>
              <span className="flex-1 rounded-md bg-[#343A5C] px-4 py-2">
                {formatFileSize(file.size)}
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              onClick={handlePreview}
              className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#E5DEFF]/90"
            >
              Preview
            </Button>
            <Button
              onClick={handleDownload}
              className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#E5DEFF]/90"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};