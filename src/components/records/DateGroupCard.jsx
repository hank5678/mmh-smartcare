import RecordRow from "./RecordRow.jsx";

export default function DateGroupCard({ date, records }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-card">
      <div className="bg-[#f3f3f3] px-4 py-2 text-[14px] text-text">{date}</div>
      {records.map((record, i) => (
        <RecordRow key={`${record.label}-${i}`} {...record} last={i === records.length - 1} />
      ))}
    </div>
  );
}
