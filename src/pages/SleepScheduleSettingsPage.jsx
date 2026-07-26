import TopBar from "../components/TopBar.jsx";
import ValueRow from "../components/settings/ValueRow.jsx";
import ConfirmButton from "../components/settings/ConfirmButton.jsx";

const SCHEDULE = [
  { label: "起床", value: "上午 7:00" },
  { label: "早餐", value: "上午 8:00" },
  { label: "午餐", value: "下午 12:00" },
  { label: "晚餐", value: "下午 6:00" },
  { label: "就寢", value: "下午 10:00" },
];

export default function SleepScheduleSettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <TopBar title="作息時間" />
      <main className="flex flex-1 flex-col px-2 pb-6 pt-4">
        <p className="px-2 pb-4 text-[16px] text-text">
          設定平時週間大致的作息，即可省略每次紀錄資料選擇時段的步驟。
        </p>
        <div className="overflow-hidden rounded-[10px] border border-border bg-card">
          {SCHEDULE.map((row) => (
            <ValueRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
        <div className="mt-auto px-2 pt-6">
          <ConfirmButton />
        </div>
      </main>
    </div>
  );
}
