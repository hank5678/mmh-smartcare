import SectionCard from "./SectionCard.jsx";
import SectionTrailing from "./SectionTrailing.jsx";
import LineTrend from "../metric-card/charts/LineTrend.jsx";
import BarTrend from "../metric-card/charts/BarTrend.jsx";
import { trendDates } from "../../data/metrics.js";

export default function TrendChartCard({ icon, color, title, series, yDomain, showAllLink = false, chartType = "line" }) {
  const Chart = chartType === "bar" ? BarTrend : LineTrend;

  return (
    <SectionCard icon={icon} color={color} title={title} trailing={showAllLink ? <SectionTrailing variant="link" /> : undefined}>
      <Chart dates={trendDates} series={series} yDomain={yDomain} />
    </SectionCard>
  );
}
