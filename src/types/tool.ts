export interface Tool {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  url: string;
  category: "نصوص" | "برمجة" | "فيديو" | "ذكاء متعدد";
  icon: string;
  tags: string[];
}
