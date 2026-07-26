const COLORS = {
  good: "text-good",
  bad: "text-bad",
  neutral: "text-text",
};

export default function StatBox({ label, value, status = "neutral" }) {
  return (
    <div className="flex-1 rounded-[5px] bg-[#f9f9f9] py-4 text-center">
      <p className="text-[14px] text-[#2c3333]">{label}</p>
      <p className={`mt-2 text-[30px] font-bold ${COLORS[status]}`}>{value}</p>
    </div>
  );
}
