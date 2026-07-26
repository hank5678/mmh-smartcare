export default function LastReadingLegend({ lastReading, legend }) {
  return (
    <>
      <p className="px-2 text-[15px] text-text">{lastReading}</p>
      <div className="flex items-center gap-5 px-2">
        {legend.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5 text-[15px] text-text">
            <span className="size-[12px]" style={{ backgroundColor: item.color }} />
            {item.label}
          </span>
        ))}
      </div>
    </>
  );
}
