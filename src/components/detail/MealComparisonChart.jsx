import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_COLORS } from "../metric-card/charts/colors.js";

function MealTick({ x, y, payload }) {
  const [date, meal] = payload.value.split("|");
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={12} textAnchor="middle" fontSize={11} fill={CHART_COLORS.axis}>
        {date}
      </text>
      <text x={0} y={25} textAnchor="middle" fontSize={11} fill={CHART_COLORS.axis}>
        {meal}
      </text>
    </g>
  );
}

export default function MealComparisonChart({ entries, yDomain }) {
  const data = entries.map((entry) => ({
    label: `${entry.date}|${entry.meal}`,
    before: entry.before,
    after: entry.after,
  }));

  return (
    <div>
      <div className="mb-1 flex items-center gap-4 text-[12px] text-axis">
        <span className="flex items-center gap-1">
          <span className="size-[7px] rounded-full" style={{ backgroundColor: CHART_COLORS.warn }} />
          餐前
        </span>
        <span className="flex items-center gap-1">
          <span className="size-[7px] rounded-full" style={{ backgroundColor: CHART_COLORS.primary }} />
          餐後
        </span>
      </div>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid vertical={false} stroke={CHART_COLORS.grid} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} height={36} tick={<MealTick />} />
          <YAxis domain={yDomain} tickLine={false} axisLine={false} width={32} tick={{ fontSize: 12, fill: CHART_COLORS.axis }} />
          <Bar dataKey="before" fill={CHART_COLORS.warn} radius={[4, 4, 0, 0]} barSize={9} />
          <Bar dataKey="after" fill={CHART_COLORS.primary} radius={[4, 4, 0, 0]} barSize={9} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
