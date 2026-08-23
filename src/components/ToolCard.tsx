import React from "react";
import { ExternalLink, Play } from "lucide-react";
import { Tool } from "../types/tool";

interface ToolCardProps {
  tool: Tool;
  onOpen: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onOpen }) => {
  return (
    <div className="tool-card glass neon-border group relative flex h-full flex-col p-5">
      {/* أيقونة الأداة */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-4xl drop-shadow-lg">{tool.icon}</span>
        <span className="tag">{tool.category}</span>
      </div>

      {/* اسم الأداة */}
      <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
      <p className="text-sm text-neon-cyan mb-3 font-medium">{tool.nameCn}</p>

      {/* الوصف */}
      <p className="text-sm text-slate-300 leading-relaxed flex-grow mb-4">
        {tool.description}
      </p>

      {/* الوسوم */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tool.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      {/* زر الفتح */}
      <button
        onClick={onOpen}
        className="btn-neon flex w-full items-center justify-center gap-2 py-3 text-sm font-bold"
      >
        <Play className="h-4 w-4" />
        تشغيل الأداة
        <ExternalLink className="h-4 w-4 opacity-70" />
      </button>
    </div>
  );
};

export default ToolCard;
