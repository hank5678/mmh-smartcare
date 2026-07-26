import { useState } from "react";
import { Plus } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import TimeRangeFilter from "../components/filters/TimeRangeFilter.jsx";
import DateGroupCard from "../components/records/DateGroupCard.jsx";
import { recordGroups } from "../data/allRecords.js";

export default function AllRecordsPage() {
  const [range, setRange] = useState("最近 14 天");

  return (
    <div className="min-h-screen bg-page">
      <TopBar title="所有紀錄資料" rightIcon={Plus} />
      <main className="w-full space-y-4 px-2 pb-8 pt-4">
        <TimeRangeFilter value={range} onChange={setRange} />

        {recordGroups.map((group) => (
          <DateGroupCard key={group.date} date={group.date} records={group.records} />
        ))}
      </main>
    </div>
  );
}
