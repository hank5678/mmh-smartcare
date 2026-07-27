import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";

export default function EcgWaveChart({ data, height = 72, color = "#ef4444" }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 4, right: 0, bottom: 4, left: 0 }}>
        <YAxis domain={[-30, 30]} hide />
        <Line
          type="linear"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
