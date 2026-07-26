import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_COLORS } from "./colors.js";

export default function LineTrend({ dates, series, yDomain }) {
  const data = dates.map((date, i) => ({ date, value: series[i] }));

  return (
    <ResponsiveContainer width="100%" height={110}>
      <LineChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
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
        <Line
          type="monotone"
          dataKey="value"
          stroke={CHART_COLORS.primary}
          strokeWidth={2}
          dot={{ r: 4, fill: "#fff", stroke: CHART_COLORS.primary, strokeWidth: 2 }}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
