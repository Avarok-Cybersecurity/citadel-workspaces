import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OfficeLayout } from "./OfficeLayout";

export const CompanyOffice = () => {
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const currentRoom = new URLSearchParams(location.search).get("room");

  let content;
  if (currentRoom === "main") {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Main Office</h2>
        <p>Welcome to the main office area.</p>
      </div>
    );
  } else if (currentRoom === "meeting") {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Meeting Room</h2>
        <p>This is where important meetings take place.</p>
      </div>
    );
  } else {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Company Office</h2>
        <p>Please select a room from the sidebar.</p>
      </div>
    );
  }

  return (
    <OfficeLayout
      title="Company Office"
      isEditing={isEditing}
      onEditToggle={() => setIsEditing(!isEditing)}
    >
      {content}
    </OfficeLayout>
  );
};