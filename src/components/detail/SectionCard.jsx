import { ICON_TEXT_COLOR } from "../../theme/iconColors.js";

export default function SectionCard({ icon: Icon, color = "bad", title, trailing, children }) {
  return (
    <section className="rounded-[10px] border border-[#d8d8d8] bg-card p-4">
      <div className="flex items-center gap-3">
        <Icon size={22} className={ICON_TEXT_COLOR[color]} />
        <h3 className="flex-1 text-[18px] tracking-[0.9px] text-text">{title}</h3>
        {trailing}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
