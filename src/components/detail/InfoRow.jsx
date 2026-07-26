export default function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-[16px] text-text">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
