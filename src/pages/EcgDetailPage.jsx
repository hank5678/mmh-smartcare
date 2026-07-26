import DetailPageShell from "../components/detail/DetailPageShell.jsx";
import SectionCard from "../components/detail/SectionCard.jsx";
import StatBox from "../components/detail/StatBox.jsx";
import TrendChartCard from "../components/detail/TrendChartCard.jsx";
import EcgRecordCard from "../components/detail/EcgRecordCard.jsx";
import HeartPulseIcon from "../assets/icons/HeartPulseIcon.jsx";
import { ecgDetail as d } from "../data/ecgDetail.js";

export default function EcgDetailPage() {
  return (
    <DetailPageShell
      title={d.title}
      filterDefault={d.filterDefault}
      lastReading={d.lastReading}
      legend={d.legend}
    >
      <SectionCard icon={HeartPulseIcon} color="bad" title="心電圖症狀結果">
        <div className="grid grid-cols-2 gap-2">
          {d.symptomStats.map((stat) => (
            <StatBox key={stat.label} label={stat.label} value={stat.value} status="good" />
          ))}
        </div>
      </SectionCard>

      <TrendChartCard
        icon={HeartPulseIcon}
        color="bad"
        title="心率(BPM)"
        series={d.heartRateTrend.series}
        yDomain={d.heartRateTrend.yDomain}
      />

      {d.records.map((record, i) => (
        <EcgRecordCard key={i} {...record} />
      ))}
    </DetailPageShell>
  );
}
