import React, { useMemo, useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { tools } from "../data/tools";
import { Tool } from "../types/tool";
import ToolCard from "./ToolCard";

interface DashboardProps {
  onOpenTool: (tool: Tool) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onOpenTool }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("الكل");

  const categories = useMemo(() => {
    const allCategories = tools.map((tool) => tool.category);
    return ["الكل", ...Array.from(new Set(allCategories))];
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.nameCn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === "الكل" || tool.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="mx-auto w-[95%] max-w-7xl px-4 py-8">
      {/* قسم البحث والفلترة */}
      <div className="fade-in-up mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن أداة، وصف، أو وسم..."
            className="search-input w-full py-3.5 pr-12 pl-10 text-base font-medium"
            dir="rtl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
              aria-label="مسح البحث"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-5 w-5 text-neon-cyan" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-neon-cyan/25 to-neon-purple/25 border border-neon-cyan/60 text-white shadow-lg shadow-neon-cyan/10"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* شبكة الأدوات */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ToolCard tool={tool} onOpen={() => onOpenTool(tool)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="glass flex flex-col items-center justify-center py-20 text-center">
          <div className="text-5xl mb-4 opacity-50">🔍</div>
          <h3 className="text-xl font-bold text-white mb-2">لا توجد نتائج</h3>
          <p className="text-slate-400">جرّب تعديل البحث أو الفلترة</p>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
