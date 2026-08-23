import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Viewer from "./components/Viewer";
import SettingsModal from "./components/SettingsModal";
import { Tool } from "./types/tool";

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleOpenTool = (tool: Tool) => {
    setSelectedTool(tool);
  };

  const handleBackFromViewer = () => {
    setSelectedTool(null);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="min-h-screen" dir="rtl">
      {selectedTool ? (
        <Viewer tool={selectedTool} onBack={handleBackFromViewer} />
      ) : (
        <>
          <Header onOpenSettings={handleOpenSettings} />
          <Dashboard onOpenTool={handleOpenTool} />
        </>
      )}

      <SettingsModal isOpen={isSettingsOpen} onClose={handleCloseSettings} />
    </div>
  );
};

export default App;
