import { ChevronDown, ChevronRight } from "lucide-react";

// The amber "全部" affordance shown in a SectionCard header. `variant="dropdown"`
// reads as an inline filter toggle (small caret); `variant="link"` reads as
// navigation to a fuller view (chevron). Neither is wired up yet — see FooterLinks
// for the pattern once a destination page exists.
export default function SectionTrailing({ label = "全部", variant = "dropdown" }) {
  return (
    <span className="flex items-center gap-1 text-[15px] text-[#ffab00]">
      {label}
      {variant === "dropdown" ? <ChevronDown size={12} /> : <ChevronRight size={17} className="text-text" />}
    </span>
  );
}
