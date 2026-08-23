import React from "react";
import { Settings, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  return (
    <header className="glass-strong sticky top-4 z-50 mx-auto flex w-[95%] max-w-7xl items-center justify-between px-6 py-4 mt-4">
      <div className="flex items-center gap-3">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-gold/30 to-neon-cyan/30 border border-neon-gold/30 shadow-lg shadow-neon-gold/10">
          <Sparkles className="h-7 w-7 text-neon-gold animate-pulse-neon" />
          <span className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-neon-cyan border-2 border-[#0b0f1a]"></span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="text-white">AI CHINA </span>
            <span className="neon-gold">By AH</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium">منصة الأدوات الصينية الذكية</p>
        </div>
      </div>

      <button
        onClick={onOpenSettings}
        className="btn-neon flex items-center gap-2 px-5 py-3 text-sm font-semibold"
        aria-label="فتح الإعدادات"
      >
        <Settings className="h-5 w-5" />
        <span className="hidden sm:inline">الإعدادات</span>
      </button>
    </header>
  );
};

export default Header;
