import PersonIcon from "../../assets/icons/PersonIcon.jsx";

export default function RecordRow({ time, label, value, source, highlight, last = false }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${last ? "" : "border-b border-border"}`}>
      <span className="w-[55px] shrink-0 text-[14px] text-muted">{time}</span>
      <div
        className={`flex size-[50px] shrink-0 items-center justify-center rounded-full ${
          highlight ? "bg-warn" : "bg-[#f6f6f6]"
        }`}
      >
        <PersonIcon size={22} className={highlight ? "text-white" : "text-primary"} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[16px] text-text">{label}</p>
        <p className="mt-1 text-[18px] font-bold text-text">{value}</p>
        <p className="mt-1 text-[12px] text-axis">來源 {source}</p>
      </div>
    </div>
  );
}
