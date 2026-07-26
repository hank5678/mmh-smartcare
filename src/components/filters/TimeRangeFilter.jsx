import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";

const OPTIONS = ["最近 7 天", "最近 14 天", "最近 30 天", "自訂區間"];

export default function TimeRangeFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-[41px] w-full items-center justify-center gap-2 rounded-full border border-warn bg-card px-4 text-[16px] tracking-[0.8px] text-text"
      >
        <Filter size={15} className="text-warn" />
        {value}
        <ChevronDown size={13} className="text-text" />
      </button>
      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+8px)] z-10 overflow-hidden rounded-[20px] border border-warn bg-card shadow-lg">
          {OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="block w-full border-b border-border py-3 text-center text-[16px] text-text last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
