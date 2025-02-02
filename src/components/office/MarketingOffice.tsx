import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OfficeLayout } from "./OfficeLayout";

export const MarketingOffice = () => {
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const currentRoom = new URLSearchParams(location.search).get("room");

  let content;
  if (currentRoom === "main") {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Marketing Office</h2>
        <p>Welcome to the marketing department.</p>
      </div>
    );
  } else if (currentRoom === "creative") {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Creative Studio</h2>
        <p>This is where our creative team works their magic.</p>
      </div>
    );
  } else {
    content = (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Marketing Department</h2>
        <p>Please select a room from the sidebar.</p>
      </div>
    );
  }

  return (
    <OfficeLayout
      title="Marketing Office"
      isEditing={isEditing}
      onEditToggle={() => setIsEditing(!isEditing)}
    >
      {content}
    </OfficeLayout>
  );
};