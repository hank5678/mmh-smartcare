import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_COLORS } from "./colors.js";

const DEFAULT_COLORS = { total: CHART_COLORS.primary, hdl: CHART_COLORS.good, ldl: CHART_COLORS.bad };

export default function MultiLineTrend({ dates, total, hdl, ldl, yDomain, colors = DEFAULT_COLORS }) {
  const SERIES = [
    { key: "total", label: "總膽固醇", color: colors.total },
    { key: "hdl", label: "高密度脂蛋白", color: colors.hdl },
    { key: "ldl", label: "低密度脂蛋白", color: colors.ldl },
  ];

  const data = dates.map((date, i) => ({
    date,
    total: total[i],
    hdl: hdl[i],
    ldl: ldl[i],
  }));

  return (
    <div>
      <div className="mb-1 flex items-center gap-4 px-4 text-[12px] text-axis">
        {SERIES.map((s) => (
          <span key={s.key} className="flex items-center gap-1">
            <span className="size-[7px] rounded-full" style={{ backgroundColor: s.color }} />
            {s.label}
          </span>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={100}>
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
          {SERIES.map((s) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              stroke={s.color}
              strokeWidth={2}
              dot={{ r: 3, fill: "#fff", stroke: s.color, strokeWidth: 2 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
