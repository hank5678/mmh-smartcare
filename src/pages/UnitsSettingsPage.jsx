import TopBar from "../components/TopBar.jsx";
import ValueRow from "../components/settings/ValueRow.jsx";
import ConfirmButton from "../components/settings/ConfirmButton.jsx";

const UNITS = [
  { label: "血糖", value: "mg/dL" },
  { label: "體重", value: "公斤" },
  { label: "身高", value: "公分" },
  { label: "腰圍", value: "公分" },
];

export default function UnitsSettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <TopBar title="單位" />
      <main className="flex flex-1 flex-col px-2 pb-6 pt-4">
        <div className="overflow-hidden rounded-[10px] border border-border bg-card">
          {UNITS.map((row) => (
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
