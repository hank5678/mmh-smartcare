import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "./colors.js";

function renderPercentLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const RADIAN = Math.PI / 180;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight="bold">
      {Math.round(percent * 100)}%
    </text>
  );
}

export default function StatusPieChart({ good, high, size = 111 }) {
  const pieData = [
    { name: "良好", value: good, color: CHART_COLORS.good },
    { name: "過高", value: high, color: CHART_COLORS.bad },
  ].filter((d) => d.value > 0);

  return (
    <div style={{ width: size, height: size }} className="shrink-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={0}
            outerRadius={size * 0.49}
            startAngle={90}
            endAngle={-270}
            stroke="none"
            label={renderPercentLabel}
            labelLine={false}
          >
            {pieData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
