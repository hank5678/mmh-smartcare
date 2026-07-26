import DropletIcon from "../assets/icons/DropletIcon.jsx";
import DetailPageShell from "../components/detail/DetailPageShell.jsx";
import SectionCard from "../components/detail/SectionCard.jsx";
import SectionTrailing from "../components/detail/SectionTrailing.jsx";
import StatBox from "../components/detail/StatBox.jsx";
import StatusBreakdown from "../components/detail/StatusBreakdown.jsx";
import ReadingCallout from "../components/detail/ReadingCallout.jsx";
import MealComparisonChart from "../components/detail/MealComparisonChart.jsx";
import TimeOfDayRangeTable from "../components/detail/TimeOfDayRangeTable.jsx";
import LineTrend from "../components/metric-card/charts/LineTrend.jsx";
import StatusPieChart from "../components/metric-card/charts/StatusPieChart.jsx";
import { CHART_COLORS } from "../components/metric-card/charts/colors.js";
import { glucoseDetail } from "../data/glucoseDetail.js";
import { trendDates } from "../data/metrics.js";
import { ROUTES } from "../routes.js";

const LEGEND = [
  { label: "過低", color: CHART_COLORS.primary },
  { label: "良好", color: CHART_COLORS.good },
  { label: "過高", color: CHART_COLORS.bad },
];

export default function GlucoseDetailPage() {
  const { summary, donut, trend, mealComparison, timeOfDayRanges, lastReading } = glucoseDetail;

  return (
    <DetailPageShell
      title="血糖"
      filterDefault="最近 7 天"
      lastReading={lastReading}
      legend={LEGEND}
      newRecordRoute={ROUTES.GLUCOSE_NEW}
      footerUnits={[{ label: "單位", value: "mg/dL" }]}
    >
      <SectionCard icon={DropletIcon} title="血糖" trailing={<SectionTrailing />}>
        <div className="flex gap-2">
          <StatBox label="最低" value={summary.low} status="good" />
          <StatBox label="最高" value={summary.high} status="bad" />
          <StatBox label="平均" value={summary.average} status="bad" />
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex-1">
            <StatusBreakdown {...donut} />
          </div>
          <StatusPieChart good={donut.good} high={donut.high} size={118} />
        </div>
      </SectionCard>

      <SectionCard icon={DropletIcon} title="血糖趨勢" trailing={<SectionTrailing variant="link" />}>
        <ReadingCallout label={trend.highlightLabel} date={trend.highlightDate} />
        <LineTrend dates={trendDates} series={trend.series} yDomain={trend.yDomain} />
      </SectionCard>

      <SectionCard
        icon={DropletIcon}
        title="血糖對照"
        trailing={<SectionTrailing label="餐前對照餐後" variant="link" />}
      >
        <ReadingCallout
          label={mealComparison.highlightLabel}
          subLabel={mealComparison.highlightSubLabel}
          date={mealComparison.highlightDate}
        />
        <MealComparisonChart entries={mealComparison.entries} yDomain={[0, 200]} />
      </SectionCard>

      <SectionCard icon={DropletIcon} title="各時段血糖分佈範圍">
        <TimeOfDayRangeTable rows={timeOfDayRanges} />
      </SectionCard>
    </DetailPageShell>
  );
}
