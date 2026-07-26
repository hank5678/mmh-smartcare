import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export default function SettingsRow({ to, icon: Icon, label }) {
  return (
    <Link to={to} className="flex h-[60px] items-center gap-3 border-b border-border px-4 last:border-b-0">
      <Icon size={20} strokeWidth={1.75} className="text-text" />
      <span className="flex-1 text-[16px] text-text">{label}</span>
      <ChevronRight size={20} className="text-muted" />
    </Link>
  );
}
