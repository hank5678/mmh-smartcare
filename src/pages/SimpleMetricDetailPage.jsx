import DetailPageShell from "../components/detail/DetailPageShell.jsx";
import SectionCard from "../components/detail/SectionCard.jsx";
import StatBox from "../components/detail/StatBox.jsx";
import TrendChartCard from "../components/detail/TrendChartCard.jsx";

export default function SimpleMetricDetailPage({ config }) {
  return (
    <DetailPageShell
      title={config.title}
      filterDefault={config.filterDefault}
      lastReading={config.lastReading}
      legend={config.legend}
      newRecordRoute={config.newRecordRoute}
      footerUnits={config.unitRow ? [config.unitRow] : []}
    >
      <SectionCard icon={config.icon} color={config.color} title={config.title}>
        <div className="flex gap-2">
          {config.stats.map((stat) => (
            <StatBox key={stat.label} label={stat.label} value={stat.value} status={stat.status} />
          ))}
        </div>
      </SectionCard>

      <TrendChartCard
        icon={config.icon}
        color={config.color}
        title={`${config.title}趨勢`}
        series={config.series}
        yDomain={config.yDomain}
      />
    </DetailPageShell>
  );
}
