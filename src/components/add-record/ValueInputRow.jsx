import { useId } from "react";

export default function ValueInputRow({ label, last = false }) {
  const inputId = useId();

  return (
    <div className={`flex items-center justify-between bg-card px-5 py-4 ${last ? "" : "border-b border-border"}`}>
      <label htmlFor={inputId} className="text-[16px] text-text">
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        inputMode="decimal"
        placeholder="請輸入測量數值"
        className="w-[140px] bg-transparent text-right text-[16px] text-text placeholder:text-[#c8c8c8] focus:outline-none"
      />
    </div>
  );
}
