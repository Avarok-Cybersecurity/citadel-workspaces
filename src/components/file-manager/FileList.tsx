import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash, CheckSquare, XSquare } from "lucide-react";
import type { FileMetadata } from "@/types/files";

interface FileListProps {
  files: FileMetadata[];
  type: 'standard' | 'revfs';
  onFileClick: (file: FileMetadata) => void;
  onDelete: (file: FileMetadata) => void;
}

export const FileList = ({ files, type, onFileClick, onDelete }: FileListProps) => {
  return (
    <div className="space-y-4">
      {files.filter(f => f.transferType === type).map((file) => (
        <div key={file.id} className="relative">
          <button
            onClick={() => onFileClick(file)}
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
            <div className="flex items-center gap-2">
              {type === 'revfs' && file.status === 'pending' && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle accept
                      console.log('Accept file:', file.id);
                    }}
                    className="hover:bg-green-500 hover:text-white"
                  >
                    <CheckSquare className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle deny
                      console.log('Deny file:', file.id);
                    }}
                    className="hover:bg-red-500 hover:text-white"
                  >
                    <XSquare className="h-4 w-4" />
                  </Button>
                </>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(file);
                }}
                className="hover:bg-red-500 hover:text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};