import { useState } from "react";
import { Heart, X } from "lucide-react";

export default function ReminderBanner({ title, message }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative rounded-[10px] bg-card p-4 pl-[59px] shadow-[0_4px_4px_0_rgba(0,0,0,0.15)]">
      <Heart className="absolute left-[24px] top-[24px] size-[26px] fill-bad text-bad" />
      <button
        type="button"
        aria-label="關閉提醒"
        onClick={() => setDismissed(true)}
        className="absolute right-[16px] top-[18px] text-muted"
      >
        <X size={20} strokeWidth={1.75} />
      </button>
      <p className="text-[14px] font-medium tracking-[0.7px] text-text">{title}</p>
      <p className="mt-2 text-[16px] leading-relaxed text-text">{message}</p>
    </div>
  );
}
