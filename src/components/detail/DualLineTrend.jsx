import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_COLORS } from "../metric-card/charts/colors.js";
import { trendDates } from "../../data/metrics.js";

export default function DualLineTrend({ seriesA, seriesB, labelA, labelB, colorA, colorB, yDomain }) {
  const data = trendDates.map((date, i) => ({ date, a: seriesA[i], b: seriesB[i] }));

  return (
    <div>
      <div className="mb-1 flex items-center gap-4 text-[12px] text-axis">
        <span className="flex items-center gap-1">
          <span className="size-[7px] rounded-full" style={{ backgroundColor: colorA }} />
          {labelA}
        </span>
        <span className="flex items-center gap-1">
          <span className="size-[7px] rounded-full" style={{ backgroundColor: colorB }} />
          {labelB}
        </span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid vertical={false} stroke={CHART_COLORS.grid} />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: CHART_COLORS.axis }} />
          <YAxis domain={yDomain} tickLine={false} axisLine={false} width={32} tick={{ fontSize: 12, fill: CHART_COLORS.axis }} />
          <Line type="monotone" dataKey="a" stroke={colorA} strokeWidth={2} dot={{ r: 3, fill: "#fff", stroke: colorA, strokeWidth: 2 }} />
          <Line type="monotone" dataKey="b" stroke={colorB} strokeWidth={2} dot={{ r: 3, fill: "#fff", stroke: colorB, strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
