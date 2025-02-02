import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

export const Office = () => {
  const [content, setContent] = useState(`
# Welcome to Our Office
## Company Updates
- New project kickoff next week
- Team building event on Friday
- Q4 planning session tomorrow

## Quick Links
- [HR Portal](#)
- [IT Support](#)
- [Meeting Rooms](#)
  `);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "The office page has been updated",
    });
  };

  return (
    <div className="flex-1 h-full overflow-hidden">
      <div className="h-full flex flex-col bg-background">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl font-semibold">Office</h1>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {isEditing ? (
            <div className="space-y-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-[400px] p-4 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};