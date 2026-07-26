export default function PillField({ label, pills }) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card px-5 py-4">
      <span className="text-[16px] text-text">{label}</span>
      <div className="flex items-center gap-2">
        {pills.map((pill) => (
          <span key={pill} className="rounded-full bg-[#ededed] px-4 py-2 text-[16px] text-text">
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
