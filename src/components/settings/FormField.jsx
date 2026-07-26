export default function FormField({ label, defaultValue, tone = "editable" }) {
  const bg = tone === "readonly" ? "bg-[#f6f6f6]" : "bg-white";

  return (
    <div>
      <p className="mb-2 text-[16px] text-text">{label}</p>
      <input
        type="text"
        defaultValue={defaultValue}
        className={`h-[50px] w-full rounded-[10px] border border-border px-4 text-[18px] text-text ${bg}`}
      />
    </div>
  );
}
