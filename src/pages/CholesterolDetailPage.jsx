import DetailPageShell from "../components/detail/DetailPageShell.jsx";
import SectionCard from "../components/detail/SectionCard.jsx";
import SectionTrailing from "../components/detail/SectionTrailing.jsx";
import StatBox from "../components/detail/StatBox.jsx";
import MultiLineTrend from "../components/metric-card/charts/MultiLineTrend.jsx";
import { trendDates } from "../data/metrics.js";
import { cholesterolDetail as d } from "../data/cholesterolDetail.js";
import { ROUTES } from "../routes.js";

export default function CholesterolDetailPage() {
  return (
    <DetailPageShell
      title={d.title}
      filterDefault={d.filterDefault}
      lastReading={d.lastReading}
      legend={d.legend}
      newRecordRoute={ROUTES.CHOLESTEROL_NEW}
      footerUnits={[d.unitRow]}
    >
      <SectionCard icon={d.icon} color={d.color} title={d.title} trailing={<SectionTrailing />}>
        <div className="space-y-4">
          {d.groups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-[16px] text-text">{group.label}</p>
              <div className="flex gap-2 rounded-[10px] bg-[#e9e9ea] p-2">
                {group.stats.map((s) => (
                  <StatBox key={s.label} label={s.label} value={s.value} status={s.status} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={d.icon} color={d.color} title="膽固醇趨勢">
        <MultiLineTrend
          dates={trendDates}
          total={d.trend.total}
          hdl={d.trend.hdl}
          ldl={d.trend.ldl}
          yDomain={d.trend.yDomain}
          colors={d.trend.colors}
        />
      </SectionCard>
    </DetailPageShell>
  );
}
