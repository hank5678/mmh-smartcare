import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_COLORS } from "./colors.js";

export default function BarTrend({ dates, series, yDomain }) {
  const data = dates.map((date, i) => ({ date, value: series[i] }));

  return (
    <ResponsiveContainer width="100%" height={110}>
      <BarChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke={CHART_COLORS.grid} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: CHART_COLORS.axis }}
        />
        <YAxis
          domain={yDomain}
          tickLine={false}
          axisLine={false}
          width={32}
          tick={{ fontSize: 12, fill: CHART_COLORS.axis }}
        />
        <Bar dataKey="value" fill={CHART_COLORS.warn} radius={[5, 5, 5, 5]} barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
}
