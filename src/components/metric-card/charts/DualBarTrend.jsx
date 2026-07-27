import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_COLORS } from "./colors.js";

export default function DualBarTrend({ dates, systolic, diastolic, yDomain }) {
  const data = dates.map((date, i) => ({
    date,
    systolic: systolic[i],
    diastolic: diastolic[i],
  }));

  return (
    <div>
      <div className="mb-1 flex items-center gap-4 px-4 text-[12px] text-axis">
        <span className="flex items-center gap-1">
          <span className="size-[7px] rounded-full" style={{ backgroundColor: CHART_COLORS.warn }} />
          收縮壓
        </span>
        <span className="flex items-center gap-1">
          <span className="size-[7px] rounded-full" style={{ backgroundColor: CHART_COLORS.primary }} />
          舒張壓
        </span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid vertical={false} stroke={CHART_COLORS.grid} />
          <XAxis
            xAxisId="date"
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: CHART_COLORS.axis }}
          />
          <XAxis xAxisId="overlay" dataKey="date" hide />
          <YAxis
            domain={yDomain}
            tickLine={false}
            axisLine={false}
            width={32}
            tick={{ fontSize: 12, fill: CHART_COLORS.axis }}
          />
          {/* Same barSize + separate xAxisIds makes the bars overlap instead of sit side by side; diastolic is always <= systolic so it renders as an inset. */}
          <Bar xAxisId="date" dataKey="systolic" fill={CHART_COLORS.warn} radius={[5, 5, 5, 5]} barSize={12} />
          <Bar xAxisId="overlay" dataKey="diastolic" fill={CHART_COLORS.primary} radius={[5, 5, 5, 5]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
