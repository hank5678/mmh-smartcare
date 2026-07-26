import CardShell from "./CardShell.jsx";
import MetricValue from "./MetricValue.jsx";
import StatusPieChart from "./charts/StatusPieChart.jsx";

const STAT_ROWS = [
  { key: "good", label: "良好", color: "text-good" },
  { key: "high", label: "過高", color: "text-bad" },
  { key: "low", label: "過低", color: "text-text" },
  { key: "total", label: "總數", color: "text-text" },
];

export default function GlucoseCard({ metric }) {
  const { good, high, low, total } = metric.donut;
  const displayValues = { good, high, low: low || "-", total };

  return (
    <CardShell icon={metric.icon} color={metric.color} title={metric.label} to={metric.to}>
      <MetricValue value={metric.average} unit={metric.unit} label="平均" />
      <div className="flex items-center gap-2 rounded-b-[10px] bg-card-footer px-4 py-4">
        <div className="flex-1 space-y-2">
          {STAT_ROWS.map((row) => (
            <div key={row.key} className="flex items-center gap-2 text-[16px]">
              <span className="w-10 text-text">{row.label}</span>
              <span className={`font-bold ${row.color}`}>{displayValues[row.key]}</span>
            </div>
          ))}
        </div>
        <StatusPieChart good={good} high={high} size={111} />
      </div>
    </CardShell>
  );
}
