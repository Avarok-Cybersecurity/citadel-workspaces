import { useLocation } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { CompanyOffice } from "./office/CompanyOffice";
import { MarketingOffice } from "./office/MarketingOffice";
import { HROffice } from "./office/HROffice";
import { FileManagerContent } from "./file-manager/FileManagerContent";

export const Office = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const section = params.get("section") || "company";
  const room = params.get("room");

  return (
    <AppLayout>
      {section === "company" && !room && <CompanyOffice />}
      {section === "marketing" && !room && <MarketingOffice />}
      {section === "hr" && !room && <HROffice />}
      {section === "files" && <FileManagerContent />}
      {room && (section === "company" || section === "marketing" || section === "hr") && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Room: {room}</h2>
        </div>
      )}
    </AppLayout>
  );
};