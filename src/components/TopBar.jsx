import { Check, ChevronLeft } from "lucide-react";
import { useSafeBack } from "../hooks/useSafeBack.js";

export default function TopBar({ title, showConfirm = true, onConfirm, rightIcon: RightIcon, onRightClick }) {
  const safeBack = useSafeBack();
  const Icon = RightIcon ?? (showConfirm ? Check : null);

  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center justify-between border-b border-border bg-card px-4">
      <button type="button" aria-label="上一頁" onClick={safeBack} className="text-text">
        <ChevronLeft size={24} strokeWidth={1.75} />
      </button>
      <p className="text-[18px] tracking-[0.9px] text-text">{title}</p>
      {Icon ? (
        <button
          type="button"
          aria-label="動作"
          onClick={onRightClick ?? onConfirm ?? safeBack}
          className="text-text"
        >
          <Icon size={22} strokeWidth={2} />
        </button>
      ) : (
        <span className="size-[22px]" />
      )}
    </header>
  );
}
