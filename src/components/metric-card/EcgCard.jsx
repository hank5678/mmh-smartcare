import CardShell from "./CardShell.jsx";
import MetricValue from "./MetricValue.jsx";
import EcgWaveChart from "./charts/EcgWaveChart.jsx";

export default function EcgCard({ metric }) {
  return (
    <CardShell icon={metric.icon} color={metric.color} title={metric.label} trailing={metric.timestamp} to={metric.to}>
      <MetricValue value={metric.average} unit={`${metric.unit} /`} label="平均" />
      <div className="rounded-b-[10px] bg-card-footer px-4 pb-4">
        <p className="pb-2 text-[14px] tracking-[0.7px] text-text">{metric.rhythm}</p>
        <div className="overflow-hidden rounded-[5px] border border-warn bg-page">
          <EcgWaveChart data={metric.waveform} height={72} />
        </div>
      </div>
    </CardShell>
  );
}
