import React, { useCallback, useState } from "react";
import { ArrowRight, RefreshCw, Monitor, Smartphone, ExternalLink, X } from "lucide-react";
import { Tool } from "../types/tool";

interface ViewerProps {
  tool: Tool;
  onBack: () => void;
}

const Viewer: React.FC<ViewerProps> = ({ tool, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setRefreshKey((prev) => prev + 1);
  }, []);

  const handleOpenExternal = () => {
    window.open(tool.url, "_blank", "noopener,noreferrer");
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0b0f1a]">
      {/* شريط الأدوات العلوي */}
      <div className="glass-strong sticky top-0 z-10 flex items-center justify-between px-4 py-3 m-3 rounded-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition"
            aria-label="العودة للرئيسية"
          >
            <ArrowRight className="h-5 w-5" />
            <span className="hidden sm:inline">عودة</span>
          </button>
          <div className="flex items-center gap-3 mr-2">
            <span className="text-2xl">{tool.icon}</span>
            <div className="flex flex-col">
              <span className="font-bold text-white">{tool.name}</span>
              <span className="text-xs text-neon-cyan">{tool.nameCn}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* زر إعادة التحميل */}
          <button
            onClick={handleRefresh}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition"
            title="إعادة تحميل"
          >
            <RefreshCw className="h-5 w-5" />
          </button>

          {/* تبديل وضع العرض */}
          <div className="flex rounded-xl bg-white/5 border border-white/10 overflow-hidden">
            <button
              onClick={() => setViewMode("desktop")}
              className={`p-2.5 transition ${
                viewMode === "desktop"
                  ? "bg-neon-cyan/20 text-neon-cyan"
                  : "text-slate-300 hover:bg-white/10"
              }`}
              title="عرض سطح المكتب"
            >
              <Monitor className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("mobile")}
              className={`p-2.5 transition ${
                viewMode === "mobile"
                  ? "bg-neon-cyan/20 text-neon-cyan"
                  : "text-slate-300 hover:bg-white/10"
              }`}
              title="عرض الهاتف"
            >
              <Smartphone className="h-5 w-5" />
            </button>
          </div>

          {/* فتح خارجي */}
          <button
            onClick={handleOpenExternal}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition"
            title="فتح في تبويب جديد"
          >
            <ExternalLink className="h-5 w-5" />
          </button>

          {/* زر إغلاق إضافي */}
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition"
            title="إغلاق"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* منطقة العرض */}
      <div className="flex-1 p-3 md:p-4 overflow-hidden">
        <div
          className={`h-full flex items-center justify-center transition-all duration-500 ${
            viewMode === "mobile" ? "iframe-mobile-frame" : "iframe-container"
          }`}
        >
          {/* مؤشر التحميل */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0b0f1a]/60 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="loader"></div>
                <span className="text-sm text-slate-300 font-medium">
                  جاري تحميل {tool.name}...
                </span>
              </div>
            </div>
          )}

          {/* الـ iframe */}
          <iframe
            key={refreshKey}
            src={tool.url}
            onLoad={handleIframeLoad}
            className="w-full h-full"
            style={{ border: "none", background: "#fff" }}
            title={`${tool.name} - Viewer`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
