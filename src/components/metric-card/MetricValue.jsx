export default function MetricValue({ label = "平均", value, unit }) {
  return (
    <div className="px-4 pb-5 pt-4">
      <p className="text-[14px] text-muted">{label}</p>
      <p className="mt-1 text-text">
        <span className="text-[30px] font-bold">{value}</span>{" "}
        <span className="text-[14px] text-muted">{unit}</span>
      </p>
    </div>
  );
}
