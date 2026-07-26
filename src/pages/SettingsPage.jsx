import { Moon, Ruler } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import SettingsRow from "../components/settings/SettingsRow.jsx";
import { ROUTES } from "../routes.js";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-page">
      <TopBar title="設定" showConfirm={false} />
      <main className="w-full px-2 pb-8 pt-4">
        <div className="overflow-hidden rounded-[10px] border border-border bg-card">
          <SettingsRow to={ROUTES.SETTINGS_SLEEP_SCHEDULE} icon={Moon} label="作息時間" />
          <SettingsRow to={ROUTES.SETTINGS_UNITS} icon={Ruler} label="單位" />
        </div>
      </main>
    </div>
  );
}
