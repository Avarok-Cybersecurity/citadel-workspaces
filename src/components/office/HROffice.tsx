import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { MDXProvider } from '@mdx-js/react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { components } from "./mdxComponents";
import { OfficeLayout } from "./OfficeLayout";
import { useLocation } from "react-router-dom";

export const HROffice = () => {
  const location = useLocation();
  const currentRoom = new URLSearchParams(location.search).get("room");

  const getInitialContent = () => {
    switch(currentRoom) {
      case "training":
        return `
# Training & Development Center 📚

## Today's Sessions

<Alert title="Upcoming Training">
Leadership Development Workshop - Starting at 10 AM in the main training room
</Alert>

## Learning Resources

<Card title="Available Materials" description="Training Tools">
- Interactive Learning Platforms
- Virtual Reality Training Sets
- Professional Development Library
- Workshop Materials

<Badge>Professional Development</Badge>
<Badge variant="secondary">Certified Programs</Badge>
</Card>

## Training Schedule

<Table data={[
  { time: '9:00', course: 'New Employee Orientation', instructor: 'HR Team' },
  { time: '11:00', course: 'Leadership Skills', instructor: 'External Coach' },
  { time: '14:00', course: 'Technical Training', instructor: 'IT Department' }
]} />
`;

      case "interview-a":
        return `
# Interview Room A - Recruitment Hub 🤝

## Today's Schedule

<Alert title="Next Interview">
Senior Developer Position - Candidate arriving at 11 AM
</Alert>

## Position Details

<Card title="Open Roles" description="Current Vacancies">
- Senior Developer (3 positions)
- Product Manager (1 position)
- UX Designer (2 positions)

<Badge>Active Hiring</Badge>
<Badge variant="secondary">Priority Roles</Badge>
</Card>

## Interview Schedule

<Table data={[
  { time: '10:00', position: 'UX Designer', interviewer: 'Design Lead' },
  { time: '11:00', position: 'Senior Developer', interviewer: 'Tech Lead' },
  { time: '14:00', position: 'Product Manager', interviewer: 'CPO' }
]} />
`;

      case "interview-b":
        return `
# Interview Room B - Assessment Center 📋

## Room Status

<Alert title="Current Activity">
Group assessment for Management Trainee positions
</Alert>

## Assessment Tools

<Card title="Available Resources" description="Evaluation Materials">
- Psychometric Tests
- Case Study Materials
- Group Exercise Tools
- Assessment Forms

<Badge>Professional Assessment</Badge>
<Badge variant="secondary">Structured Evaluation</Badge>
</Card>

## Assessment Schedule

<Table data={[
  { time: '9:30', activity: 'Group Discussion', assessor: 'HR Manager' },
  { time: '11:30', activity: 'Case Presentations', assessor: 'Department Heads' },
  { time: '14:30', activity: 'Individual Interviews', assessor: 'Senior Management' }
]} />
`;

      default:
        return `
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
`;
    }
  };

  const [content, setContent] = useState(getInitialContent());
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
    setContent(getInitialContent());
  }, [currentRoom]);

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
        <div className="px-4 pt-6 pb-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[400px] p-4 rounded-md border border-gray-800 bg-[#444A6C] text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      ) : (
        <div className="px-4 pt-6 pb-2 prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
          <MDXProvider components={components}>
            {compiledContent}
          </MDXProvider>
        </div>
      )}
    </OfficeLayout>
  );
};
