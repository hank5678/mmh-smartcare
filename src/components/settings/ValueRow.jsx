export default function ValueRow({ label, value }) {
  return (
    <div className="flex h-[60px] items-center justify-between border-b border-border px-4 last:border-b-0">
      <span className="text-[16px] text-text">{label}</span>
      <span className="rounded-full bg-[#ededed] px-4 py-1.5 text-[16px] text-text">{value}</span>
    </div>
  );
}
