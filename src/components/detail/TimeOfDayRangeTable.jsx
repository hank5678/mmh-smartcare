import { CHART_COLORS } from "../metric-card/charts/colors.js";

const SCALE_MAX = 400;
const SCALE_MARKS = [0, 100, 200, 300, 400];

function toPercent(value) {
  return (value / SCALE_MAX) * 100;
}

function RangeTrack({ range }) {
  if (!range) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-[13px] text-muted">尚無資料</span>
      </div>
    );
  }

  const hasSpread = range.max > range.min;
  const tickColor = range.status === "good" ? CHART_COLORS.good : CHART_COLORS.bad;

  return (
    <div className="relative h-full w-full">
      {hasSpread && (
        <div
          className="absolute top-1/2 h-[11px] -translate-y-1/2 rounded-full bg-[#ccc]"
          style={{ left: `${toPercent(range.min)}%`, width: `${toPercent(range.max - range.min)}%` }}
        />
      )}
      <div
        className="absolute top-1/2 h-[17px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ left: `${toPercent(range.average)}%`, backgroundColor: tickColor }}
      />
      <span
        className="absolute top-[calc(50%+13px)] -translate-x-1/2 whitespace-nowrap text-[11px] text-text"
        style={{ left: `${toPercent(range.average)}%` }}
      >
        {range.average}
      </span>
    </div>
  );
}

export default function TimeOfDayRangeTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#d8d8d8]">
      <div className="flex border-b border-[#d8d8d8] bg-card text-[13px] text-text">
        <div className="w-[68px] shrink-0 border-r border-[#e1e1e1] py-3 text-center">時段</div>
        <div className="flex-1 border-r border-[#e1e1e1] py-3 text-center">最低至最高</div>
        <div className="w-[68px] shrink-0 py-2 text-center text-[12px] leading-tight">
          目標
          <br />
          範圍內
        </div>
      </div>
      <div className="flex border-b border-[#d8d8d8] bg-card text-[12px] text-muted">
        <div className="w-[68px] shrink-0 border-r border-[#e1e1e1]" />
        <div className="flex flex-1 justify-between border-r border-[#e1e1e1] px-2 py-1">
          {SCALE_MARKS.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
        <div className="w-[68px] shrink-0" />
      </div>
      {rows.map((row) => (
        <div key={row.label} className="flex border-b border-[#d8d8d8] bg-card last:border-b-0">
          <div className="flex w-[68px] shrink-0 items-center justify-center border-r border-[#e1e1e1] px-1 py-3 text-center text-[13px] text-text">
            {row.label}
          </div>
          <div className="flex-1 border-r border-[#e1e1e1] px-3 py-3">
            <div className="h-[24px]">
              <RangeTrack range={row.range} />
            </div>
          </div>
          <div className="flex w-[68px] shrink-0 items-center justify-center py-3 text-[13px] text-text">-</div>
        </div>
      ))}
      <div className="flex items-center gap-4 px-3 py-3 text-[12px] text-[#727272]">
        <span className="flex items-center gap-1.5">
          <span className="h-[11px] w-[17px] rounded-full bg-[#ccc]" />
          血糖範圍
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-[11px] w-[6px] rounded-full bg-primary" />
          平均血糖
        </span>
      </div>
    </div>
  );
}
