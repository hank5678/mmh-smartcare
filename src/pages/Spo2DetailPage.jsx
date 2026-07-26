import DetailPageShell from "../components/detail/DetailPageShell.jsx";
import SectionCard from "../components/detail/SectionCard.jsx";
import StatBox from "../components/detail/StatBox.jsx";
import InfoRow from "../components/detail/InfoRow.jsx";
import TrendChartCard from "../components/detail/TrendChartCard.jsx";
import { spo2Detail as d } from "../data/spo2Detail.js";
import { ROUTES } from "../routes.js";

export default function Spo2DetailPage() {
  return (
    <DetailPageShell
      title={d.title}
      filterDefault={d.filterDefault}
      lastReading={d.lastReading}
      legend={d.legend}
      newRecordRoute={ROUTES.SPO2_NEW}
      footerUnits={[d.unitRow]}
    >
      <SectionCard icon={d.icon} color={d.color} title={d.title}>
        <div className="flex gap-2">
          {d.stats.map((stat) => (
            <StatBox key={stat.label} label={stat.label} value={stat.value} status={stat.status} />
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {d.info.map((row) => (
            <InfoRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </SectionCard>

      <TrendChartCard
        icon={d.icon}
        color={d.color}
        title={`${d.title}趨勢`}
        series={d.series}
        yDomain={d.yDomain}
        chartType="bar"
        showAllLink
      />
    </DetailPageShell>
  );
}
