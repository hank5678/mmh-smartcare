import TopBar from "../components/TopBar.jsx";
import FormHeaderIcon from "../components/add-record/FormHeaderIcon.jsx";
import PillField from "../components/add-record/PillField.jsx";
import ValueInputRow from "../components/add-record/ValueInputRow.jsx";
import ConfirmButton from "../components/settings/ConfirmButton.jsx";

export default function AddRecordPage({ config }) {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <TopBar title="新增紀錄" />
      <main className="flex-1 pb-8">
        <FormHeaderIcon icon={config.icon} color={config.color} title={config.title} />
        <div className="mx-2 overflow-hidden rounded-[10px] border border-border">
          {config.hasMealPeriod ? (
            <>
              <PillField label="時間" pills={[config.date, config.time]} />
              <PillField label="時段" pills={[config.mealPeriod]} />
            </>
          ) : (
            <>
              <PillField label="日期" pills={[config.date]} />
              <PillField label="時間" pills={[config.time]} />
            </>
          )}
          {config.valueFields.map((label, i) => (
            <ValueInputRow key={label} label={label} last={i === config.valueFields.length - 1} />
          ))}
        </div>
      </main>
      <div className="px-6 pb-8">
        <ConfirmButton />
      </div>
    </div>
  );
}
