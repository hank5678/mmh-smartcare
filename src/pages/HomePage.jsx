import { useState } from "react";
import Header from "../components/Header.jsx";
import ReminderBanner from "../components/ReminderBanner.jsx";
import MetricCard from "../components/metric-card/MetricCard.jsx";
import GlucoseCard from "../components/metric-card/GlucoseCard.jsx";
import EcgCard from "../components/metric-card/EcgCard.jsx";
import MenuDrawer from "../components/menu/MenuDrawer.jsx";
import { metrics, reminder } from "../data/metrics.js";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page">
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="w-full space-y-4 px-2 pb-8 pt-4">
        <ReminderBanner title={reminder.title} message={reminder.message} />

        <h2 className="px-2 text-[16px] text-text">數據</h2>

        {metrics.map((metric) => {
          if (metric.id === "glucose") return <GlucoseCard key={metric.id} metric={metric} />;
          if (metric.id === "ecg") return <EcgCard key={metric.id} metric={metric} />;
          return <MetricCard key={metric.id} metric={metric} />;
        })}
      </main>
    </div>
  );
}
