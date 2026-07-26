const ROWS = [
  { key: "good", label: "良好", color: "text-good" },
  { key: "high", label: "過高", color: "text-bad" },
  { key: "low", label: "過低", color: "text-text" },
  { key: "total", label: "總數", color: "text-text" },
];

export default function StatusBreakdown({ good, high, low, total }) {
  const values = { good, high, low: low || "-", total };

  return (
    <div className="space-y-2">
      {ROWS.map((row) => (
        <div key={row.key} className="flex items-center gap-2 text-[18px]">
          <span className="w-10 text-text">{row.label}</span>
          <span className={`font-bold ${row.color}`}>{values[row.key]}</span>
        </div>
      ))}
    </div>
  );
}
