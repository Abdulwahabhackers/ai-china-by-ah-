import React from "react";
import { X, Info, AppWindow, Users, Tag } from "lucide-react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* الخلفية */}
      <div className="modal-backdrop absolute inset-0" onClick={onClose}></div>

      {/* النافذة */}
      <div className="glass-strong relative w-full max-w-md p-6 fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition"
          aria-label="إغلاق"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white">
            <span className="neon-gold">AI CHINA</span> By AH
          </h2>
          <p className="text-sm text-slate-400 mt-1">معلومات النظام</p>
        </div>

        <div className="space-y-4">
          {/* التطبيق */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-xl bg-neon-cyan/15 border border-neon-cyan/30">
              <AppWindow className="h-6 w-6 text-neon-cyan" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">التطبيق</p>
              <p className="font-bold text-white">AI CHINA By AH</p>
            </div>
          </div>

          {/* النسخة */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-xl bg-neon-purple/15 border border-neon-purple/30">
              <Tag className="h-6 w-6 text-neon-purple" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">النسخة</p>
              <p className="font-bold text-white">1.0 (الإصدار الأول)</p>
            </div>
          </div>

          {/* فريق التطوير */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-xl bg-neon-gold/15 border border-neon-gold/30">
              <Users className="h-6 w-6 text-neon-gold" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">فريق التطوير</p>
              <p className="font-bold text-white">HACKERS AH</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Info className="h-4 w-4" />
          <span>جميع الحقوق محفوظة © 2026</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
