import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MDXProvider } from '@mdx-js/react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { components } from "./mdxComponents";
import { OfficeLayout } from "./OfficeLayout";

export const CompanyOffice = () => {
  const [content, setContent] = useState(`
# Welcome to Our Company Office 🏢

## Today's Updates

<Alert title="Important Notice">
Team meeting scheduled for 2 PM today in the main conference room.
</Alert>

## Project Overview

<Card title="Current Sprint" description="Sprint 23 - Week 2">
- Feature development in progress
- Code reviews pending
- QA testing scheduled

<Badge>In Progress</Badge>
<Badge variant="secondary">High Priority</Badge>
</Card>

## Team Schedule

<Table data={[
  { time: '9:00', monday: 'Standup', tuesday: 'Planning', wednesday: 'Review' },
  { time: '11:00', monday: 'Dev', tuesday: 'Dev', wednesday: 'Testing' },
  { time: '14:00', monday: 'Review', tuesday: 'Testing', wednesday: 'Deploy' }
]} />
  `);
  const [compiledContent, setCompiledContent] = useState<React.ReactNode | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "The office page has been updated",
      className: "bg-[#343A5C] border-purple-800 text-purple-200",
    });
  };

  useState(() => {
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
      title="Company"
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