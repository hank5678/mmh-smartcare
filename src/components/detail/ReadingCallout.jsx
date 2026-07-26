export default function ReadingCallout({ label, subLabel, date }) {
  return (
    <div className="mb-3 inline-flex flex-col items-center rounded-[5px] border border-warn bg-page px-5 py-2 shadow-sm">
      {subLabel && <p className="text-[12px] text-muted">{subLabel}</p>}
      <p className="text-[18px] font-bold text-[#2c3333]">{label}</p>
      <p className="text-[11px] text-muted">{date}</p>
    </div>
  );
}
