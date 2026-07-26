import DetailPageShell from "../components/detail/DetailPageShell.jsx";
import SectionCard from "../components/detail/SectionCard.jsx";
import SectionTrailing from "../components/detail/SectionTrailing.jsx";
import StatBox from "../components/detail/StatBox.jsx";
import StatusPieChart from "../components/metric-card/charts/StatusPieChart.jsx";
import StatusBreakdown from "../components/detail/StatusBreakdown.jsx";
import TrendChartCard from "../components/detail/TrendChartCard.jsx";
import DualLineTrend from "../components/detail/DualLineTrend.jsx";
import { CHART_COLORS } from "../components/metric-card/charts/colors.js";
import { bpHrDetail as d } from "../data/bloodPressureHeartRateDetail.js";
import { ROUTES } from "../routes.js";

export default function BloodPressureHeartRateDetailPage() {
  return (
    <DetailPageShell
      title={d.title}
      filterDefault={d.filterDefault}
      lastReading={d.lastReading}
      legend={d.legend}
      newRecordRoute={ROUTES.BLOOD_PRESSURE_HEART_RATE_NEW}
      footerUnits={d.units}
    >
      <SectionCard icon={d.icon} color={d.color} title="血壓" trailing={<SectionTrailing />}>
        <p className="mb-2 text-[16px] text-text">{d.bloodPressure.systolic.label}</p>
        <div className="mb-4 flex gap-2 rounded-[10px] bg-[#e9e9ea] p-2">
          {d.bloodPressure.systolic.stats.map((s) => (
            <StatBox key={s.label} label={s.label} value={s.value} status={s.status} />
          ))}
        </div>
        <p className="mb-2 text-[16px] text-text">{d.bloodPressure.diastolic.label}</p>
        <div className="mb-4 flex gap-2 rounded-[10px] bg-[#e9e9ea] p-2">
          {d.bloodPressure.diastolic.stats.map((s) => (
            <StatBox key={s.label} label={s.label} value={s.value} status={s.status} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <StatusBreakdown {...d.bloodPressure.status} />
          </div>
          <StatusPieChart good={d.bloodPressure.status.good} high={d.bloodPressure.status.high} size={118} />
        </div>
      </SectionCard>

      <SectionCard icon={d.icon} color={d.color} title="血壓趨勢" trailing={<SectionTrailing variant="link" />}>
        <DualLineTrend
          seriesA={d.bloodPressure.trend.systolicSeries}
          seriesB={d.bloodPressure.trend.diastolicSeries}
          labelA="收縮壓"
          labelB="舒張壓"
          colorA={CHART_COLORS.warn}
          colorB={CHART_COLORS.primary}
          yDomain={d.bloodPressure.trend.yDomain}
        />
      </SectionCard>

      <SectionCard icon={d.icon} color={d.color} title="心跳" trailing={<SectionTrailing />}>
        <div className="flex gap-2">
          {d.heartRate.stats.map((s) => (
            <StatBox key={s.label} label={s.label} value={s.value} status={s.status} />
          ))}
        </div>
      </SectionCard>

      <TrendChartCard
        icon={d.icon}
        color={d.color}
        title="心跳趨勢"
        series={d.heartRate.series}
        yDomain={d.heartRate.yDomain}
        showAllLink
      />
    </DetailPageShell>
  );
}
