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
    // TODO: Implement actual save logic
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "The office page has been updated",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in">
      <div className="glass-panel rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Office</h1>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
        
        {isEditing ? (
          <div className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-[400px] p-4 rounded-md border"
            />
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        ) : (
          <div className="prose prose-gray max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};