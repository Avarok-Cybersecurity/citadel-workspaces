import { AppLayout } from "./layout/AppLayout";
import { FileManagerContent } from "./file-manager/FileManagerContent";

const FileManager = () => {
  return (
    <AppLayout>
      <FileManagerContent />
    </AppLayout>
  );
};

export default FileManager;