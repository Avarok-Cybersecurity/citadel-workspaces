import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { MDXProvider } from '@mdx-js/react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { components } from "./mdxComponents";
import { OfficeLayout } from "./OfficeLayout";

export const HROffice = () => {
  const [content, setContent] = useState(`
# Human Resources Department 👥

## Important Announcements

<Alert title="Upcoming Events">
Annual performance reviews starting next week - Schedule your meeting with your manager
</Alert>

## HR Metrics

<Card title="Team Statistics" description="Current Month">
- Total Employees: 150
- New Hires: 5
- Open Positions: 3

<Badge>Growing Team</Badge>
<Badge variant="secondary">Active Hiring</Badge>
</Card>

## Training Schedule

<Table data={[
  { course: 'Leadership Skills', date: 'Monday', time: '10:00 AM', location: 'Room 301' },
  { course: 'DEI Workshop', date: 'Wednesday', time: '2:00 PM', location: 'Main Hall' },
  { course: 'Tech Skills', date: 'Friday', time: '11:00 AM', location: 'Room 205' }
]} />

## Quick Search

<Card title="Quick Search" description="Search Google directly">
<div style={{ height: '400px', overflow: 'hidden' }}>
  <iframe
    src="https://www.google.com/search?igu=1"
    width="100%"
    height="400px"
    style={{ border: 'none' }}
    loading="lazy"
  ></iframe>
</div>
</Card>
  `);

  const [compiledContent, setCompiledContent] = useState<React.ReactNode | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "The HR office page has been updated",
      className: "bg-[#343A5C] border-purple-800 text-purple-200",
    });
  };

  useEffect(() => {
    const compileContent = async () => {
      try {
        console.log('Compiling MDX content...');
        const result = await evaluate(content, {
          ...runtime,
          useMDXComponents: () => components,
          baseUrl: window.location.origin
        });
        console.log('MDX compilation successful');
        setCompiledContent(result.default({ components }));
      } catch (error) {
        console.error('Error compiling MDX:', error);
      }
    };

    compileContent();
  }, [content]);

  return (
    <OfficeLayout
      title="Human Resources"
      isEditing={isEditing}
      onEditToggle={() => setIsEditing(!isEditing)}
      onSave={handleSave}
    >
      {isEditing ? (
        <div className="p-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[400px] p-4 rounded-md border border-gray-800 bg-[#444A6C] text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      ) : (
        <div className="p-2 prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
          <MDXProvider components={components}>
            {compiledContent}
          </MDXProvider>
        </div>
      )}
    </OfficeLayout>
  );
};
