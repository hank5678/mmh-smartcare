import { trendDates } from "../../data/metrics.js";
import CardShell from "./CardShell.jsx";
import MetricValue from "./MetricValue.jsx";
import ChartFooter from "./charts/ChartFooter.jsx";
import LineTrend from "./charts/LineTrend.jsx";
import BarTrend from "./charts/BarTrend.jsx";
import DualBarTrend from "./charts/DualBarTrend.jsx";
import MultiLineTrend from "./charts/MultiLineTrend.jsx";

export default function MetricCard({ metric }) {
  return (
    <CardShell icon={metric.icon} color={metric.color} title={metric.label} to={metric.to}>
      <MetricValue
        value={metric.averageDisplay ?? metric.average}
        unit={metric.unit}
        label={metric.averageLabel ?? "平均"}
      />
      <ChartFooter>
        {metric.chartType === "line" && (
          <LineTrend dates={trendDates} series={metric.series} yDomain={metric.yDomain} />
        )}
        {metric.chartType === "bar" && (
          <BarTrend dates={trendDates} series={metric.series} yDomain={metric.yDomain} />
        )}
        {metric.chartType === "dualBar" && (
          <DualBarTrend
            dates={trendDates}
            systolic={metric.systolic}
            diastolic={metric.diastolic}
            yDomain={metric.yDomain}
          />
        )}
        {metric.chartType === "multiLine" && (
          <MultiLineTrend
            dates={trendDates}
            total={metric.total}
            hdl={metric.hdl}
            ldl={metric.ldl}
            yDomain={metric.yDomain}
          />
        )}
      </ChartFooter>
    </CardShell>
  );
}
