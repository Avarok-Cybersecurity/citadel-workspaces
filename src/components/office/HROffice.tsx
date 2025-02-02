import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OfficeLayout } from "./OfficeLayout";

export const HROffice = () => {
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const currentRoom = new URLSearchParams(location.search).get("room");

  let content;
  if (currentRoom === "main") {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">HR Office</h2>
        <p>Welcome to the Human Resources department.</p>
      </div>
    );
  } else if (currentRoom === "interview") {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Interview Room</h2>
        <p>This is where we conduct interviews and meetings.</p>
      </div>
    );
  } else {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">HR Department</h2>
        <p>Please select a room from the sidebar.</p>
      </div>
    );
  }

  return (
    <OfficeLayout
      title="HR Office"
      isEditing={isEditing}
      onEditToggle={() => setIsEditing(!isEditing)}
    >
      {content}
    </OfficeLayout>
  );
};